const axios = require('axios')
const qs = require('qs');
axios.get('https://show.bilibili.com/api/ticket/order/createstatus?token=ad2f4e0314c7bbed678f6d150e106cdd&timestamp=1719297579816&project_id=85298&orderId=4005942443936999',{
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    'Cookie':"uvid3=F8C77CEA-45F3-325D-ADE0-00384BCD288C52676infoc; b_nut=1693979552; CURRENT_FNVAL=4048; _uuid=3414451E-1333-2538-F46B-22EC3C795A2C53084infoc; rpdid=|(umu|l)lu|R0J'uYmJm~mlll; buvid4=8994EE56-431A-C727-164A-14C0B080DE9516527-022032814-wJ%2FXJ57ZLhyWLoRqZRtWng%3D%3D; buvid_fp_plain=undefined; DedeUserID=37252211; DedeUserID__ckMd5=b890b24aac9fda11; hit-new-style-dyn=1; hit-dyn-v2=1; enable_web_push=DISABLE; header_theme_version=CLOSE; home_feed_column=5; PVID=1; fingerprint=803a9d52ac07e66f1817f4cc7efc8451; CURRENT_QUALITY=120; buvid_fp=803a9d52ac07e66f1817f4cc7efc8451; browser_resolution=1440-643; SESSDATA=3dce36f4%2C1732160251%2C111c3%2A51CjAVo2RT2cspnzluRUiDEJvbxNcnPsS7kzhOJck--OUj-zqIhAIAxtykEl5RcejNCjESVmp2b3plcWFJdFo1NnVCQ0hQQWRSa2o5a1V4ekM5SUhlWDhKY0hyMUhiS3JCTnBIdE9MSERmSkFVeE10ZU04WVVVcFNDNmotM1lMWTFJVi1PeDc0V2RnIIEC; bili_jct=f3951ad94f62ed3685639241885c2d87; sid=6atg1ek0; b_lsid=3E4A13EA_1904DE734C6; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk1NTMxMTcsImlhdCI6MTcxOTI5Mzg1NywicGx0IjotMX0.AA3lZcG0HJH2niQGWYvk0_1ccAOXNVL-6d9W2pNPXFk; bili_ticket_expires=1719553057; msource=pc_web; deviceFingerprint=66f743857cd018162879d14c52d5cd73; Hm_lvt_909b6959dc6f6524ac44f7d42fc290db=1719293924; from=pc_ticketlist; Hm_lpvt_909b6959dc6f6524ac44f7d42fc290db=1719296917"
  },
  "referrer": "https://show.bilibili.com/platform/confirmOrder.html?token=wGZ6WAYAAU0yAAKuYgEAAQAHiSY.&project_id=85298",
}).then(response => {
  console.log(response.data);
  return
  const data = {
    project_id: 85298,
    screen_id: 175714,
    sku_id: 493862,
    count: 1,
    pay_money: 6500,
    order_type: 1,
    timestamp: response.data.data.payParam.timestamp,
    buyer_info: [{ "id": 2733812, "uid": 37252211, "accountId": 37252211, "name": "井晓冲", "buyer": null, "tel": "15539502921", "disabledErr": null, "account_channel": "", "personal_id": "411121199808210015", "id_card_front": "", "id_card_back": "", "is_default": 1, "id_type": 0, "verify_status": 1, "isBuyerInfoVerified": true, "isBuyerValid": true }],
    token: 'wGZ6WAYAAU0yAAKuYgEAAQAHiSY.',
    deviceId: '66f743857cd018162879d14c52d5cd73',
    clickPosition: { "x": 1140, "y": 162, "origin": 1719294180862, "now": 1719294183927 },
    newRisk: true,
    requestSource: 'pc-new',
  }
  const formData = qs.stringify(data);
  axios.post('https://show.bilibili.com/api/ticket/order/createV2?project_id=85298', formData
    , {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-risk-header": "platform/pc uid/37252211 deviceId/F8C77CEA-45F3-325D-ADE0-00384BCD288C52676infoc",
        "cookie": "buvid3=F8C77CEA-45F3-325D-ADE0-00384BCD288C52676infoc; b_nut=1693979552; CURRENT_FNVAL=4048; _uuid=3414451E-1333-2538-F46B-22EC3C795A2C53084infoc; rpdid=|(umu|l)lu|R0J'uYmJm~mlll; buvid4=8994EE56-431A-C727-164A-14C0B080DE9516527-022032814-wJ%2FXJ57ZLhyWLoRqZRtWng%3D%3D; buvid_fp_plain=undefined; DedeUserID=37252211; DedeUserID__ckMd5=b890b24aac9fda11; hit-new-style-dyn=1; hit-dyn-v2=1; enable_web_push=DISABLE; header_theme_version=CLOSE; home_feed_column=5; PVID=1; fingerprint=803a9d52ac07e66f1817f4cc7efc8451; CURRENT_QUALITY=120; buvid_fp=803a9d52ac07e66f1817f4cc7efc8451; browser_resolution=1440-643; SESSDATA=3dce36f4%2C1732160251%2C111c3%2A51CjAVo2RT2cspnzluRUiDEJvbxNcnPsS7kzhOJck--OUj-zqIhAIAxtykEl5RcejNCjESVmp2b3plcWFJdFo1NnVCQ0hQQWRSa2o5a1V4ekM5SUhlWDhKY0hyMUhiS3JCTnBIdE9MSERmSkFVeE10ZU04WVVVcFNDNmotM1lMWTFJVi1PeDc0V2RnIIEC; bili_jct=f3951ad94f62ed3685639241885c2d87; sid=6atg1ek0; b_lsid=3E4A13EA_1904DE734C6; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk1NTMxMTcsImlhdCI6MTcxOTI5Mzg1NywicGx0IjotMX0.AA3lZcG0HJH2niQGWYvk0_1ccAOXNVL-6d9W2pNPXFk; bili_ticket_expires=1719553057; msource=pc_web; deviceFingerprint=66f743857cd018162879d14c52d5cd73; Hm_lvt_909b6959dc6f6524ac44f7d42fc290db=1719293924; from=pc_ticketlist; Hm_lpvt_909b6959dc6f6524ac44f7d42fc290db=1719294181",
        "Referer": "https://show.bilibili.com/platform/confirmOrder.html?token=wGZ6WAYAAU0yAAKuYgEAAQAHiSY.&project_id=85298",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
    }
  ).then((res) => {
    console.log(res.data);
  }).catch((err) => {
  });
})
