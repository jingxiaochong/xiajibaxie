const axios = require('axios')
const HttpsProxyAgent = require('https-proxy-agent');
let public = {}
let flag = true
let userInfo = {}
let userInfos = {}

// 代理服务器的 URL
const proxyUrl = 'https://172.20.10.2';

// 创建代理代理对象
const agent = new HttpsProxyAgent(proxyUrl);

axios.get('http://116.62.122.121:4396/getInfo?card_id=41112119980912651X').then((infores) => {
    userInfo = {
        token: infores.data.ref,
        info: [{
            "audienceIdentityNumber": '41112119980912651X',
            "audienceIdentityType": "ID_CARD",
            "audienceName": '李一帆',
            "audienceCellphone": null,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }, {
            "audienceIdentityNumber": '411121200601260029',
            "audienceIdentityType": "ID_CARD",
            "audienceName": '李卓雅',
            "audienceCellphone": null,
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
        console.log(res.data);
        public.saveTime = {
            date: res.data.data.reservationDates[0].reservationDate,
            startTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime,
            endTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime,
        }
        // 打出滑块
        // for (let index = 0; index < 100; index++) {
        //     postFunction()
        // }
    })
})
axios.get('http://116.62.122.121:4396/getInfo?card_id=41112119980912651X').then((infores) => {
    userInfos = {
        token: infores.data.access_token,
        info: [{
            "audienceIdentityNumber": '411121199901097010',
            "audienceIdentityType": "ID_CARD",
            "audienceName": '周省身',
            "audienceCellphone": null,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }, {
            "audienceIdentityNumber": '411121199808210015',
            "audienceIdentityType": "ID_CARD",
            "audienceName": '井晓冲',
            "audienceCellphone": null,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }]
    }
})

start()
function start() {
    let date = new Date()
    if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 58) {
        setInterval(() => {
            if (flag) {
                search()
            }
        }, 10);
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
            if (flag) {
                flag = false
                postFunction()
                postFunction1()
            }
        }
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
                'Cookie': 'acw_sc__v3=66758b7153f4490a12282ee566d0e249364e06d6' //滑块参数
            }
        }).then((res) => {
        }).catch(err => {
        })
}

function postFunction1() {
    let data = {
        "reservationConfigId": public.reservationConfigId,
        "reservationDate": public.saveTime.date,
        "startTime": public.saveTime.startTime,
        "endTime": public.saveTime.endTime,
        "showOrderId": "",
        "showSessionId": "",
        "reservationAudienceParams": userInfos.info,
        "src": "H5"
    }
    axios.post(public.postUrl, data,
        {
            "headers": {
                "access-token": userInfos.token,
                'Cookie': 'acw_sc__v3=66758b7153f4490a12282ee566d0e249364e06d6' //滑块参数
            }
        }).then((res) => {
            console.log(res.data);
            if (res.data.statusCode == 200 && res.data.data.id) {
                axios.post('http://116.62.122.121:4396/putUserInfo', {
                    data: {
                        token: userInfos.token,
                        id: res.data.data.id
                    }
                })
                setTimeout(() => {
                    // 根据成功id拿到顺序
                    axios.get(public.searchOrder.replace('id', res.data.data.id), {
                        headers: {
                            "access-token": userInfos.token,
                        }
                    }).then((success) => {
                        // 获取到成功序列号 插入
                        axios.post('http://116.62.122.121:4396/editOrders', {
                            id: res.data.data.id,
                            order: success.data.data.orderItems[0].reservationSequence,
                            token: userInfos.token
                        })
                    })
                }, 10000);

            }
        }).catch(err => {
            postFunction1
        })
}