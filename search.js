const axios = require('axios')
const public = require('./public.js')

let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo').then((res) => {
    userInfo = {
        token: res.data.access_token, info: {
            "audienceIdentityNumber": res.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": res.data.user,
            // "audienceCellphone": res.data.phone,
            "audienceCellphone": null,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }
    }
})


start()
function start() {
    let date = new Date()
    if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
        search()
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
                axios.post('http://116.62.122.121:4396/putUserInfo', {
                    data: {
                        token: userInfo.token,
                        id: res.data.data.id
                    }
                })
            } else {
                setTimeout(() => {
                    postFunction()
                }, 500);
            }
        }).catch((err) => {
            console.log(err);
        });
}