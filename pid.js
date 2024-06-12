const axios = require('axios')
let public = {}
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
}

let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo').then((infores) => {
  userInfo = {
    token: infores.data.access_token,
    // info: [{
    //   "audienceIdentityNumber": '41112119980912651X',
    //   "audienceIdentityType": "ID_CARD",
    //   "audienceName": '李一帆',
    //   "audienceCellphone": null,
    //   "seatInfo": "",
    //   "showOrderTicketItemId": ""
    // }, {
    //   "audienceIdentityNumber": '411121199808210015',
    //   "audienceIdentityType": "ID_CARD",
    //   "audienceName": '井晓冲',
    //   "audienceCellphone": null,
    //   "seatInfo": "",
    //   "showOrderTicketItemId": ""
    // }],
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
  if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 55) {
    setInterval(() => {
      postFunction()
    }, 1);
    setTimeout(() => {
      process.exit(0)
    }, 60000);
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
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
      }
    }).catch((err) => {
      console.log(err);
    });
}