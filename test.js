const axios = require('axios')
let public = {}

// axios.get('https://myip.ipip.net', {
//   httpsAgent: agent
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(err => {
//   console.log(err.response.data);
// });

// axios.get('https://myip.ipip.net', {
//     proxy: {
//       host: '107.152.46.223',
//       port: 34000,
//       auth: {
//         username: 'u1532496100958799',
//         password: 'Ak8L6oaqjbui'
//       }
//     }
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     if (err.response) {
//       console.log(err.response.data);
//     } else {
//       console.log(err.message);
//     }
//   });
// return


let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo?activeId=667acbcb62bcc30001138010',).then((infores) => {
    console.log(infores.data.user);
    userInfo = {
        // token: infores.data.refresh_token,
        token: infores.data.access_token,
        info: [{
            "audienceIdentityNumber": infores.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": infores.data.user,
            "seatInfo": "",
            "showOrderTicketItemId": "",
            audienceCellphone: null,
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
        console.log(res.data.data);
        // public.saveTime = {
        //     date: res.data.data.reservationDates[0].reservationDate,
        //     startTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime,
        //     endTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime,
        // }
        public.saveTime = {
            date: '',
            startTime:'',
            endTime: '',
        }
        setInterval(() => {
            postFunction()
        }, 100);
    }).catch((err)=>{
    })
})

// start()
// function start() {
//     let date = new Date()
//     const options = {
//         timeZone: 'Asia/Shanghai',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false
//     };
//     const formatter = new Intl.DateTimeFormat('en-US', options);
//     const parts = formatter.formatToParts(date);
//     let hour, minute, second;
//     for (const part of parts) {
//         if (part.type === 'hour') hour = part.value;
//         if (part.type === 'minute') minute = part.value;
//         if (part.type === 'second') second = part.value;
//     }
//     console.log(hour, minute, second);
//     if (hour == 13 && minute == 59 && second == 58) {
//         setInterval(() => {
//             search()
//         }, 100);
//         setTimeout(() => {
//             process.exit(0)
//         }, 90000);
//     } else {
//         setTimeout(() => {
//             start()
//         }, 1);
//     }
// }

// function search() {
//     axios.get(public.searchURl, {
//         "headers": {
//             "access-token": userInfo.token,
//         }
//     }).then(res => {
//         if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
//             postFunction()
//         }
//     })
// }
let num = 0
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
            },
            proxy: {
                host: '85.239.53.78',
                port: 33000,
                auth: {
                  username: 'u1532496100958799',
                  password: 'Ak8L6oaqjbui'
                }
              }
        }).then((res) => {
            // console.log(res.data);
            axios.get('http://116.62.122.121:4396/getlog').then(()=>{}).catch(()=>{})
            if (res.data.statusCode) {
                console.log(res.data);
                num += 1
                console.log(num);
            }
        }).catch((err) => { 
            // console.log(err);
            console.log('error');
        })
}