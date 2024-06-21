const axios = require('axios')
let public = {}

let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo').then((infores) => {
    userInfo = {
        // token: infores.data.access_token,
        token: infores.data.refresh_token,
        info: [{
            "audienceIdentityNumber": infores.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": infores.data.user,
            "audienceCellphone": null,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }]
    }
    // public.searchURl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/6662ce4bea07ab0001514394/instance`

    public.searchURl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${infores.data.active_id}/instance?src=H5&channelId=&terminalSrc=H5&id=6674fee11884c80001e26be4`
    public.postUrl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders`
    public.searchOrder = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders/id`
    public.reservationConfigId = '6662ce4bea07ab0001514394'
    axios.get(public.searchURl, {
        "headers": {
            'Accept':'application/json, text/plain, */*',
            "access-token": userInfo.token,
            'Content-Type':'application/json;charset=UTF-8',
            'Referer':'https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/6674fee11884c80001e26be4',
            'Terminal-Src':'H5',
            'X-Requested-With':'XMLHttpRequest'
        }
    }).then(res => {
        console.log(res.data);
        public.saveTime = {
            date: res.data.data.reservationDates[0].reservationDate,
            startTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime,
            endTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime,
        }
        // postFunction()
    })
})

start()
function start() {
    let date = new Date()
    if (date.getHours() == 14 && date.getMinutes() == 59 && date.getSeconds() == 55) {
        setInterval(() => {
            search()
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
        if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
            for (let index = 0; index < 1000; index++) {
                postFunction()
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
            }
        }).then((res) => {
            console.log(res.data);
        })
}