// 服务器 0
const axios = require('axios')
const public = require('./public.js')
const fs = require('fs');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '116.62.122.121',
  port: '3306',
  user: 'root',
  password: 'jxc123456',
  charset: 'utf8',
  database: 'info'
})
let list = []
connection.query(`SELECT * FROM tokens;`, (error, results, fields) => {
  if (error) {
    console.log(error);
  }
  for (const item of results) {
    list.push({
      token: item.access_token, info: {
        "audienceIdentityNumber": item.card_id,
        "audienceIdentityType": "ID_CARD",
        "audienceName": item.user,
        "audienceCellphone": item.phone,
        "seatInfo": "",
        "showOrderTicketItemId": ""
      }
    })
  }
})
connection.end(function (err) {
  if (err) {
    return console.log(err.message);
  }
});

setTimeout(() => {
  console.log(list);
  // postFunction(list[2].info, list[2].token)
}, 1000);
let ids = []
start()
function start() {
  let date = new Date()
  if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 57) {
    postData()
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}


// 往死里递归
function postData() {
  for (const item of list) {
    postFunction(item.info, item.token)
  }

  let date = new Date()
  if (date.getHours() == 14 && date.getMinutes() == 0 && date.getSeconds() == 10) {
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


function postFunction(info, token) {
  let data = {
    "reservationConfigId": public.reservationConfigId,
    "reservationDate": public.saveTime.data,
    "startTime": public.saveTime.startTime,
    "endTime": public.saveTime.endTime,
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