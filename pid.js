const axios = require('axios')
let public = {}
// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
// if (cluster.isMaster) {
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
// }

let userInfo = {}
// let num = 0
  // num = infores.data.num
let num =  Math.floor(Math.random() * (1000 + 1)) //随机启动时间
axios.get('http://116.62.122.121:4396/getInfo?activeId=667afa066e635d0001b7a649').then((infores) => {
  console.log(infores.data.user);
  userInfo = {
    token: infores.data.access_token,
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
  public.Host = `${infores.data.base_url}.caiyicloud.com`
  public.Origin = `https://${infores.data.base_url}.caiyicloud.com`
  public.Referer = `https://${infores.data.base_url}.caiyicloud.com/reserve/reserve-detail/personinfo`
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
  const options = {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(date);
  let hour, minute, second;
  for (const part of parts) {
    if (part.type === 'hour') hour = part.value;
    if (part.type === 'minute') minute = part.value;
    if (part.type === 'second') second = part.value;
  }
  if (hour == 13 && minute == 59 && second == 50) {
    setTimeout(() => {
      postFunction()
      setInterval(() => {
        postFunction()
      }, 500);
      setTimeout(() => {
        process.exit(0)
      }, 60000);
    }, num);
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
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': '371',
        'Content-Type': 'application/json;charset=UTF-8',
        'Host': public.Host,
        'Origin': public.Origin,
        'Pragma': 'no-cache',
        'Referer': public.Referer,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
        'X-Requested-With': 'XMLHttpRequest',
        'channel-id': '',
        'terminal-src': 'H5',
      }
    }).then((res) => {
      // console.log(res.data);
      if (res.data.statusCode) {
        console.log(res.data.statusCode);
        // process.exit(0)
      }
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
      // console.log(err);
    });
}