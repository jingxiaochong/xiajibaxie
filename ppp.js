const axios = require('axios')
const cluster = require('cluster');
if (cluster.isMaster) {
  for (let i = 0; i < 8; i++) {
    cluster.fork();
  }
}


setInterval(() => {
for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 1000; i++) {
        postFunction()
    }
}
}, 1);



function postFunction() {
  let data = {
    "reservationConfigId": '6614d5d3a7e76a0001b662f0',
    "reservationDate":'1713024000000',
    "startTime": '19:30',
    "endTime": '21:30',
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": {
        audienceIdentityNumber: '',
        audienceIdentityType: 'ID_CARD',
        audienceName: '何金宇',
        audienceCellphone: '17046571291',
        seatInfo: '',
        showOrderTicketItemId: ''
      },
    "src": "H5"
  }
try {
    // 'https://6566d890783b53000119b89d.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5'
    // https://www.baidu.com/
    axios.get('https://6566d890783b53000119b89d.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5', data,
    {
      "headers": {
        "access-token": 'NT3FUwjxXm-gOvOT6ElWMHL6_v3B1QwTm79J6paqVYbhlq6WjLGODdOmzb7MrkJfTGtd1_Pm6wMqdmV1W0BFUdNiHKPjVAFFLXh8g4-2pxCpoRA42yxIScUDq4V0O-xi7TtBloez-TnkaJN4V_a5iNNJJvucFYlQ65RI1c54GlMNMwB570DxeZgfXosKV9fyBK_gh-KYxd8FucGvV0eu94AAAD__w.LgbB398Kt6T20hnjhAFspxeSMVwLqRDbtI67IQ0fwziD8dizLvHl0lhhPMbtyedi2Ii_Z7MSPqjZznDGWprzjyPJZ4xX7TR1wyRoRCJuvTpYcZbTZjqw8YH0LsqoIkwKbQZLGkW9vOI7OP0WB-shvcvU1jHSkFRgYd5owjZVviU',
      }
    }).then((res) => {
      // console.log(res.data);
      // if (res.data.statusCode == 200 && res.data.data.id) {
      //   ids.push(res.data.data.id)
      // }
    }).catch((err) => {
      console.log(err);
    });
} catch (error) {
}
}