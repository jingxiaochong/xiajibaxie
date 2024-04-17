const axios = require('axios')
const public = require('./public.js')
const mysql = require('mysql');

let info = {}
axios.get('http://116.62.122.121:4396/getInfo').then((res) => {
    userInfo = {
        token: res.access_token, info: {
            "audienceIdentityNumber": res.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": res.user,
            "audienceCellphone": res.phone,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }
    }
})



setTimeout(() => {
    console.log(public);
}, 1000);
let ids = []

start()
function start() {
    let date = new Date()
    if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
        search()
        setTimeout(() => {
            if (ids.length != 0) {
                let connectSuccend = mysql.createConnection({
                    host: '116.62.122.121',
                    port: '3306',
                    user: 'root',
                    password: 'jxc123456',
                    charset: 'utf8',
                    database: 'info'
                })

                connectSuccend.query(`INSERT INTO succeed (access_token,succeed_id) VALUES ?`, [ids], function (err, results, fields) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('success')
                })

                connectSuccend.end(function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            }
        }, 60000);
    } else {
        setTimeout(() => {
            start()
        }, 1);
    }
}

function search() {
    axios.get(public.searchURl, {
        "headers": {
            "access-token": userInfo.token,
        }
    }).then(res => {
        if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
            postFunction()
        } else {
            setTimeout(() => {
                search()
            }, 500);
        }
    })
}

function postFunction() {
    let data = {
        "reservationConfigId": public.reservationConfigId,
        "reservationDate": public.saveTime.data,
        "startTime": public.saveTime.startTime,
        "endTime": public.saveTime.endTime,
        "showOrderId": "",
        "showSessionId": "",
        "reservationAudienceParams": [userInfo.info],
        "src": "H5"
    }
    axios.post(public.postUrl, data,
        {
            "headers": {
                "access-token": userInfo.token,
            }
        }).then((res) => {
            console.log(res.data);
            if (res.data.statusCode == 200 && res.data.data.id) {
                ids.push([userInfo.token, res.data.data.id])
            } else {
                setTimeout(() => {
                    postFunction()
                }, 500);
            }
        }).catch((err) => {
            console.log(err);
        });
}