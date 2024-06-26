const axios = require('axios')
let public = {}

let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo?type=1').then((infores) => {
    userInfo = {
        token: infores.data.refresh_token,
        info: [{
            "audienceIdentityNumber": infores.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": infores.data.user,
            // "audienceCellphone": Math.random() >= 0.2 ? null : infores.data.phone,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }]
    }

    public.searchURl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${infores.data.active_id}/instance`
    public.postUrl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders`
    public.searchOrder = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders/id`
    public.reservationConfigId = infores.data.active_id
    axios.get(public.searchURl, {
        "headers": {
            "access-token": userInfo.token,
        }
    }).then(res => {
        public.saveTime = {
            date: res.data.data.reservationDates[0].reservationDate,
            startTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime,
            endTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime,
        }
    })
})

start()
function start() {
    const options = {
        timeZone: 'Asia/Shanghai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    let hour, minute, second;
    for (const part of parts) {
        if (part.type === 'hour') hour = part.value;
        if (part.type === 'minute') minute = part.value;
        if (part.type === 'second') second = part.value;
    }
    if (hour == 13 && minute == 59 && second == 58) {
        search()
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
        if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
            postFunction()
        } else {
            search()
        }
    }).catch(() => {
        search()
    })
}

function postFunction() {
    let data = {
        "reservationConfigId": public.reservationConfigId,
        "reservationDate": public.saveTime.date,
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

            } else {
                setTimeout(() => {
                    postFunction()
                }, 500);
            }
        }).catch((err) => {
            setTimeout(() => {
                postFunction()
            }, 500);
            console.log(err);
        });
}