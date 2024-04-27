const axios = require('axios')
const cluster = require('cluster');
if (cluster.isMaster) {
  for (let i = 0; i < 8; i++) {
    cluster.fork();
  }
}



setInterval(() => {
  for (let index = 0; index < 1000; index++) {
    postFunction()
  }
}, 1);

function postFunction() {
  let data = {
    "reservationConfigId": '661b74818212220001e62236',
    "reservationDate": '1713369600000',
    "startTime": '14:00',
    "endTime": '20:00',
    "showOrderId": "",
    "showSessionId": "",
    "reservationAudienceParams": [{
      "audienceIdentityNumber": "34128220040915244X",
      "audienceIdentityType": "ID_CARD",
      "audienceName": "于默涵",
      "seatInfo": "",
      "showOrderTicketItemId": ""
    }],
    "src": "H5"
  }
  axios.post('https://6437cab4291ee50001318391.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5', data,
    {
      "headers": {
        "access-token": 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzn4v06ORSCQWiFV9MAJ2c5GjZTYleMgoOq742CCeuK4o_lmd-cCwczp9OS7AI2fh6GCecJY5gvY_usutAgNPDzu3vZQwTTb7Z-oBN84YwWrKaIkhFBONa9p9mXyEIbFtD2-3h-yMiZ3XKLbBZSixY5bZ7QybAFpi1SoAt7YpBadMlo6RX9sVgjWKrhWgB_nPuJLP-J6eCafzxhNCv_SMi9xEU36hemGcs5JLQgTLD_4OSUcy4Mld8ToTsan25Ly9pXUVJAK3jFOffDQ8NKgN-th128AAAD__w.hltg860PPc2vRm4_hEqKypo-_xFMC8t54HhjqH9r46W4vphyVe8X1M-HuAKJBK-g9LVxzOxktnFJRV3hJtDJnHIjrlQp3zozZ3Y1r0SuZQe7HEkTHq0qlgfCJMJ2tY69Pmd4DGiaGNJZn0NxnFfOs_SeZLbqT6uJx56_j_WRxmY',
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
}