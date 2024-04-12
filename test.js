const axios = require('axios')
const public = require('./public.js')
const mysql = require('mysql');

// 第几个服务器
let num = 0
let timeout = 0
axios.get('http://116.62.122.121:4396/getNumbers').then((res) => {
    console.log(res.data);
    num = res.data
    timeout = num * 9
}).catch((err) => { })

let list = []  //信息列表

const connection = mysql.createConnection({
    host: '116.62.122.121',
    port: '3306',
    user: 'root',
    password: 'jxc123456',
    charset: 'utf8',
    database: 'info'
})
connection.query(`SELECT * FROM tokens;`, (error, results, fields) => {
    if (error) {
        console.log(error);
    }
    for (const item of results) {
        list.push({
            token: item.access_token, info: {
                "audienceIdentityNumber": item.card_id,
                "audienceIdentityType": "ID_CARD",
                "audienceName": item.user,
                "audienceCellphone": item.phone,
                "seatInfo": "",
                "showOrderTicketItemId": ""
            }
        })
    }
})
connection.end(function (err) {
    if (err) {
        return console.log(err);
    }
});
setTimeout(() => {
    console.log(public);
    console.log(list);
}, 1000);
let ids = []
start()
function start() {
    let date = new Date()
    if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 55) {
        setTimeout(() => {
            for (const item of list) {
                postFunction(item.info, item.token)
            }
            setTimeout(() => {
                if (ids.length != 0) {
                    setTimeout(() => {
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
                    }, timeout);
                }
            }, 50000);
        }, timeout);
    } else {
        setTimeout(() => {
            start()
        }, 1);
    }
}


function postFunction(info, token) {
    let data = {
        "reservationConfigId": public.reservationConfigId,
        "reservationDate": public.saveTime.data,
        "startTime": public.saveTime.startTime,
        "endTime": public.saveTime.endTime,
        "showOrderId": "",
        "showSessionId": "",
        "reservationAudienceParams": [info],
        "src": "H5"
    }
    axios.post(public.postUrl, data,
        {
            "headers": {
                "access-token": token,
            }
        }).then((res) => {
            console.log(res.data);
            if (res.data.statusCode == 200 && res.data.data.id) {
                ids.push([token, res.data.data.id])
            }
        }).catch((err) => {
            console.log(err);
        });
}