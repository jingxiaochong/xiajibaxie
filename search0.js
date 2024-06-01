const axios = require('axios')
const public = require('./public.js')

let userInfo = {}
let flag = true
axios.get('http://116.62.122.121:4396/getInfo').then((res) => {
    userInfo = {
        token: res.data.access_token,
        info: [{
            "audienceIdentityNumber": res.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": res.data.user,
            "audienceCellphone": null,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }]
    }
})

start()
function start() {
    let date = new Date()
    if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
        let setinters = setInterval(() => {
            if (flag) {
              search()
            }else {
                clearInterval(setinters)
            }
        }, 1);
        setTimeout(() => {
            process.exit(0)
        }, 90000);
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
        if (res.data.data.reservationDates[0].configItems[0].isOnsale && flag) {
            flag = false
            setInterval(() => {
                postFunction()
            }, 1);
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
        "reservationAudienceParams": userInfo.info,
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
                setTimeout(() => {
                    // 根据成功id拿到顺序
                    axios.get(public.searchOrder.replace('id', res.data.data.id), {
                        headers: {
                            "access-token": userInfo.token,
                        }
                    }).then((success) => {
                        // 获取到成功序列号 插入
                        axios.post('http://116.62.122.121:4396/editOrders', {
                            id: res.data.data.id,
                            order: success.data.data.orderItems[0].reservationSequence,
                            token: userInfo.token
                        })
                    })
                }, 10000);

            }
        })
}