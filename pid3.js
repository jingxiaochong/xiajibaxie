const axios = require('axios')
const info = require('./info2.js')
const public = require('./public.js')

start()
function start() {
  let date = new Date()
  if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
    postData()
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}


// 往死里递归
function postData() {
  let date = new Date()
  if (date.getHours() == 14 && date.getMinutes() == 0 && date.getSeconds() == 20) {
    return
  } else {
    setTimeout(() => {
      postFunction()
      postData()
    }, 1);
  }
}


function postFunction() {
  let time = public.saveTime
  let data = {
    "reservationConfigId": public.reservationConfigId,
    "reservationDate":time.data,
    "startTime": time.startTime,
    "endTime": time.endTime,
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": info.postData,
    "src": "H5"
  }
  axios.post(public.postUrl, data,
    {
      "headers": {
        "access-token": info.AccessToken,
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log('预约失败');
    });
}