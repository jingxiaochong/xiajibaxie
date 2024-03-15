const axios = require('axios')
const info = require('./info.js')
const public = require('./public.js')

var obj = {}
let flag = true

start()
function start() {
  let date = new Date()
  if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
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
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "access-token": info.AccessToken,
      "cache-control": "no-cache",
      "channel-id": "",
      "content-type": "application/json;charset=UTF-8",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "terminal-src": "H5",
      "x-requested-with": "XMLHttpRequest",
      "cookie": info.Cookie,
      "Referer": public.Referer,
      "Referrer-Policy": "strict-origin-when-cross-origin"
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
  let data = {
    "reservationConfigId": public.reservationConfigId,
    "reservationDate": obj.reservationDate,
    "startTime": obj.startTime,
    "endTime": obj.endTime,
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": [
      info.postData
    ],
    "src": "H5"
  }
  axios.post(public.postUrl, data,
    {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "access-token": info.AccessToken,
        "cache-control": "no-cache",
        "channel-id": "",
        "content-type": "application/json;charset=UTF-8",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "terminal-src": "H5",
        "x-requested-with": "XMLHttpRequest",
        "cookie": info.Cookie,
        "Referer": public.Referer,
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log('预约失败');
    });
}