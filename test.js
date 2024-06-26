const axios = require('axios')
let public = {}

let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo').then((infores) => {
    userInfo = {
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
    })
})

start()
function start() {
    let date = new Date()
    console.log(date.getHours(),date.getMinutes(),date.getSeconds())
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