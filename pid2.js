// 服务器 0
const axios = require('axios')
const info = require('./info2.js')
const public = require('./public.js')
const fs = require('fs');
let ids = []

start()
function start() {
  let date = new Date()
  if (date.getHours() == 15 && date.getMinutes() == 59 && date.getSeconds() == 57) {
    postData()
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}


// 往死里递归
function postData() {
  for (let index = 0; index < 3; index++) {
    postFunction(info['postData'+index],info['AccessToken'+index])
  }

  let date = new Date()
  if (date.getHours() == 16 && date.getMinutes() == 0 && date.getSeconds() == 10) {
    fs.writeFile('./ids2.md', JSON.stringify(ids), err => {
      if (err) {
        console.error(err);
      }
    });
    return
  } else {
    setTimeout(() => {
      postData()
    }, 1);
  }
}


function postFunction(info,token) {
  let time = public.saveTime
  let data = {
    "reservationConfigId": public.reservationConfigId,
    "reservationDate":time.data,
    "startTime": time.startTime,
    "endTime": time.endTime,
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": info,
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
        ids.push(res.data.data.id)
      }
    }).catch((err) => {
      console.log(err);
    });
}