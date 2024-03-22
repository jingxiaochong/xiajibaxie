const axios = require('axios')
const info = require('./info1.js')
const public = require('./public.js')

var obj = {}
let flag = true

start()
function start() {
  let date = new Date()
  if (date.getHours() == 17 && date.getMinutes() == 59 && date.getSeconds() == 50) {
    searchData()
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}


function searchData() {
  if (flag) {
    setTimeout(() => {
      search()
      searchData()
    }, 1);
  }
}
function search() {
  axios.get(public.searchURl, {
    "headers": {
      "access-token": info.AccessToken,
    }
  }).then(res => {
    // console.log(res.data.data.reservationDates[0].reservationDate);
    // console.log(res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime)
    // console.log(res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime)
    // console.log(res.data.data.reservationDates[0].configItems[0].isOnsale);
    if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
      flag = false
      obj = {
        reservationDate: res.data.data.reservationDates[0].reservationDate,
        startTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime,
        endTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime
      }
      postData()
    }
  }).catch(res => {
    console.log(res);
  })
}



// 往死里递归
function postData() {
  postData()
  let date = new Date()
  if (date.getHours() == 18 && date.getMinutes() == 0 && date.getSeconds() == 20) {
    return
  } else {
    setTimeout(() => {
      postFunction()
      postData()
    }, 1);
  }
}


function postFunction() {
  let data = {
    "reservationConfigId": public.reservationConfigId,
    "reservationDate": obj.reservationDate,
    "startTime": obj.startTime,
    "endTime": obj.endTime,
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": info.postData,
    "src": "H5"
  }
  axios.post(public.postUrl, data,
    {
      "headers": {
        "access-token": info.AccessToken,
        "Referer": public.Referer,
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log('预约失败');
    });
}