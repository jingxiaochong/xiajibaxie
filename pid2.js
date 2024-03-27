const axios = require('axios')
const info = require('./info2.js')
const public = require('./public.js')
const fs = require('fs');

start()
function start() {
  let date = new Date()
  if (date.getHours() == 11 && date.getMinutes() == 59 && date.getSeconds() == 58) {
    postData()
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}


// 往死里递归
function postData() {
  postFunction(info.postData1,info.AccessToken1)
  // postFunction(info.postData2,info.AccessToken2)
  // postFunction(info.postData3,info.AccessToken3)
  let date = new Date()
  if (date.getHours() == 12 && date.getMinutes() == 0 && date.getSeconds() == 10) {
    return
  } else {
    setTimeout(() => {
      postData()
    }, 10);
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
        fs.writeFile('./test.md', res.data.data.id, err => {
          if (err) {
            console.error(err);
          }
        });
      }
    }).catch((err) => {
      console.log(err);
    });
}