const axios = require('axios')
const info = require('./info.js')
let flag = false

// 计算时间
function start() {

  let date = new Date()
  if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
    postData()
    return
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }

}

// 开始计时
start()

// 往死里递归
function postData() {
  if (flag) {
    return
  } else {
    setTimeout(() => {
      postFunction()
      postData()
    }, 100);
  }
}


// 第一段请求
function putFunction() {
  axios.put(info.putUrl, info.putData, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "access-token": info.AccessToken,
      "cache-control": "no-cache",
      "channel-id": "",
      "content-type": "application/json;charset=UTF-8",
      "pragma": "no-cache",
      "putparamstoobject": "true",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "terminal-src": "H5",
      "x-requested-with": "XMLHttpRequest",
      "cookie": info.Cookie,
      "Referer": info.Referer,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(err);
    });
}


function postFunction() {
  let time = info.saveTime.split(" ")
  t = time[0].replace(new RegExp(/-/gm), "/")
  n = new Date(t).getTime()
  let times = time[1].split('-')

  let data = {
    "reservationConfigId": info.reservationConfigId,
    "reservationDate": n,
    "startTime": times[0],
    "endTime": times[1],
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": [
      info.postData
    ],
    "src": "H5"
  }
  axios.post(info.postUrl, data,
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
        "Referer": info.Referer,
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    }).then((res) => {
      console.log(res.data);
      if (res.data.statusCode == 200 || res.data.comments == '成功') {
        flag = true
      }
    }).catch((err) => {
      console.log('预约失败');
    });
}



