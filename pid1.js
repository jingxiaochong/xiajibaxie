const axios = require('axios')
const public = require('./public.js')
const mysql = require('mysql');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
  for (let i = 0; i < 8; i++) {
    cluster.fork();
  }
}

let str = ''
let flag = true
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
    return console.log(err);
  }
});
setTimeout(() => {
  console.log(public);
  console.log(list);
    // searchData()
}, 1000);
let ids = []

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
      "access-token": list[0].token,
    }
  }).then(res => {
    // console.log(res.data.data.reservationDates[0].reservationDate);
    // console.log(res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime)
    // console.log(res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime)
    // console.log(res.data.data.reservationDates[0].configItems[0].isOnsale);
    if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
      flag = false
      postData()
      let date = new Date()
      str = date.getSeconds()
    }
  }).catch(res => {
    console.log(res);
  })
}



function postData() {
  for (const item of list) {
    postFunction(item.info, item.token)
  }
  let date = new Date()
  if (date.getHours() == 14 && date.getMinutes() == 0 && date.getSeconds() == 20) {
    if (ids.length != 0) {
      let connectSuccend = mysql.createConnection({
        host: '116.62.122.121',
        port: '3306',
        user: 'root',
        password: 'jxc123456',
        charset: 'utf8',
        database: 'info'
      })

      connectSuccend.query(`INSERT INTO succeed (access_token,succeed_id) VALUES ?`, [ids], function (err, results, fields) {
        if (err) {
          return console.log(err);
        }
        console.log('success')
      })

      connectSuccend.end(function (err) {
        if (err) {
          return console.log(err);
        }
      });
    }
    setTimeout(() => {
      console.log(str);
    }, 30000);
    return
  } else {
    setTimeout(() => {
      // postData()
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
    "reservationAudienceParams": [info],
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
        ids.push([token, res.data.data.id])
      }
    }).catch((err) => {
      console.log(err);
    });
}