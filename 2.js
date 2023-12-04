const axios = require('axios')


const url = 'https://6506966fb2800f0001e2285e.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5';

let data = {
  "identityAuthRequests": [
    {
      "idType": "ID_CARD",
      "idTypeName": "身份证",
      "idNo": "411121199808210015",
      "name": "井晓冲"
    }
  ],
  "src": "H5"
}
// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
axios.put(url, data, {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFqwzAQRP9lzz5IsqRsckxJaSClEJpDT0Wy1sRgS0GWS9uQf69cJSWnHneYt7OzZwhmSsetbwOs_NT3FUwjxTKfwXbfD8ERrODxaff-DBWMk13_iVoxvdS6tQIZaxljnIRARdmXyX3oZ9P68LbZZ2VIzWFe7X5B6aitbWNQGzGD3BGXuoB3Nu2Q1NIqq2sz2yRz6CRcKqDPUxfptRvodngmX04UTQr_0nUOaSKZdIX5gnG9QI1cCswFv8ZEQylY9g4Um6Px6f5JOf1KokLkFXxQHLvgs1g-6M3tsMsPAAAA__8.G-mwocS_gCAmyeHqEhWckS3ObqK7vAo8JPttwoYDAEu1rCswZ2RX8XRoTHGuwsqtyaUYYkteDYt_eQXTnkRGoHCvE19X0GP-1Juq8T_zh9Zlp7sbrJvtpxw7E2SB1I97vvcmP9SE2GAixOwo9hdwXTEeTAHGOXWDkwQUVjjZs6I",
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
    "cookie": "Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238; ssxmod_itna2=eqIx9D0DBA0=qiKe0dD=wg0DROvQie=DceIExnKS7qeDsmaDLQQtYy77B+YyL2u563w4/qxxHD8gFX=YFzwo=A3=YToe8k+9dd=Pr5h1F6U7oiL2R2s5j/LRnXw+6x61TaUhF2BXy8En7bdS/MKG+kQSl8U+8jXGmTKomj01Sgvcl4rQP4+=Pf4Hm4rU3PQorQEIbaNeqZv0ipt6CknxHlWR0TRgGTf4xKde5ZcWuW6SUOmfnS5VbkU0W8ILKG8L58EOUd2LlKBkIx+xFRMY6bYuWy=UfK66aStBTmXgEjfOfNN8Zj5i7e8DhVEjElwHmjeaYq9fPUUygXSlw/6Ui=peg00A0hh2rEiU0rxFGSQpR=bVA2rF2zDh56U3mePSvvO08tDw=AkWEqU=if3CebhiDupQ4ltkhYf1pop2xaKG=Ag7QYCN/0TihpLpviGpPx5YjXPpegiXXR=P0dqo4jWA3G4DQ9DiD4taN+rsie1Nc=0k=U2KKxDFqD+hDxD=; ssxmod_itna=eqIhBKD5Y5DI1DAxBaCQ5DkFLCdqYTWFmxKKDsqDcQxA5D8D6DQeGTTRro=TG=GFcY2xW4oGobmKAC0CDLYAtQDefGASx84GIDeKG2DmeDyDi5GRD09meTDem=D5xGoDPxDeDAlKDCZaq=D7xNVDe=lB8D4xBE/iwjS0d4DCODDbxPgDB6=xBjD2LQ0ACNqqlRoYGEavidyFrP4KGhpYGeQRYhaR7pakDo8aYq4F++dSoOxD; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1699606246; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1uwyAQhN9lzz4AxhucY6pUjZSqUtQceqrArBVLxkQYV22jvHtx6I9PPTKa-YadC3g9xdNuaD2sh6nvC5hGCvl9AdN93nlLsIb7h_3rIxQwTmbzK2LFsEZsjVCMtYwxTkKoipIvJQ--n02b48v2kBQXm-OMtregtNSWptEKtZiD3BKXmIMLG1pFVW0qg6WebZJZZSVcC6D3cxfouXOpg68YKhSouBT1DfF0pqCj_xdTprYmkI5_FI4r9UMZP8ZILl-al3EUmpMe4nKt9I1lfwFvFMbOD0nMUw7afQOuXwAAAP__.P0RQfruIr1AU3KR7rc-ExsMkbIc72U9-GLkXzGP2NS9lZvcscvoYIQZM0S3XmGhmNBJ32dlAWqz9WqMflOIYTtLfI1A5SUJ363wmCvffJPo3FEavp2iljxrJISpgmjQiiLRMWwFSXzx2zrWHWydRcvfbvLU05c3v49vZDw8jY9E; user_cellphone=153****1009; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFqwzAQRP9lzz5IsqRsckxJaSClEJpDT0Wy1sRgS0GWS9uQf69cJSWnHneYt7OzZwhmSsetbwOs_NT3FUwjxTKfwXbfD8ERrODxaff-DBWMk13_iVoxvdS6tQIZaxljnIRARdmXyX3oZ9P68LbZZ2VIzWFe7X5B6aitbWNQGzGD3BGXuoB3Nu2Q1NIqq2sz2yRz6CRcKqDPUxfptRvodngmX04UTQr_0nUOaSKZdIX5gnG9QI1cCswFv8ZEQylY9g4Um6Px6f5JOf1KokLkFXxQHLvgs1g-6M3tsMsPAAAA__8.G-mwocS_gCAmyeHqEhWckS3ObqK7vAo8JPttwoYDAEu1rCswZ2RX8XRoTHGuwsqtyaUYYkteDYt_eQXTnkRGoHCvE19X0GP-1Juq8T_zh9Zlp7sbrJvtpxw7E2SB1I97vvcmP9SE2GAixOwo9hdwXTEeTAHGOXWDkwQUVjjZs6I; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656d8e59b5b63a000140d8d4%22%2C%22%24device_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226506966fb2800f0001e2285e.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226506966fb2800f0001e2285e%22%7D%2C%22first_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiYjg2ZDY0NGQxMDdhLTA1NGIwNmQwMDdkZGJhLTE2NTI1NjM0LTEyOTYwMDAtMThiYjg2ZDY0NGUxMDZlIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjU2ODgxZWY0ZDRiMzMwMDAxNGUxZjAyIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22656881ef4d4b3300014e1f02%22%7D%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238,1701682780; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701682780",
    "Referer": "https://6506966fb2800f0001e2285e.caiyicloud.com/reserve/reserve-detail/personinfo",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(456);
  });


return
  //reservationConfigId 在local的 reserveId
  //reservationDate
let url1 = 'https://6506966fb2800f0001e2285e.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5'
let data1 = {
  "reservationConfigId": "656c1d4563ccf80001ee9a6d",
  "reservationDate": 170144640000,
  "startTime": "19:30",
  "endTime": "21:30",
  "showOrderId": "",
  "showSessionId": "",
  "reservationAudienceParams": [
    {
      "audienceCellphone": null,
      "audienceIdentityNumber": "411121199808210015",
      "audienceIdentityType": "ID_CARD",
      "audienceName": "井晓冲",
      "seatInfo": "",
      "showOrderTicketItemId": ""
    }
  ],
  "src": "H5"
}
axios.post(url1, data1,
  {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFqwzAQRP9lzz5IsqRsckxJaSClEJpDT0Wy1sRgS0GWS9uQf69cJSWnHneYt7OzZwhmSsetbwOs_NT3FUwjxTKfwXbfD8ERrODxaff-DBWMk13_iVoxvdS6tQIZaxljnIRARdmXyX3oZ9P68LbZZ2VIzWFe7X5B6aitbWNQGzGD3BGXuoB3Nu2Q1NIqq2sz2yRz6CRcKqDPUxfptRvodngmX04UTQr_0nUOaSKZdIX5gnG9QI1cCswFv8ZEQylY9g4Um6Px6f5JOf1KokLkFXxQHLvgs1g-6M3tsMsPAAAA__8.G-mwocS_gCAmyeHqEhWckS3ObqK7vAo8JPttwoYDAEu1rCswZ2RX8XRoTHGuwsqtyaUYYkteDYt_eQXTnkRGoHCvE19X0GP-1Juq8T_zh9Zlp7sbrJvtpxw7E2SB1I97vvcmP9SE2GAixOwo9hdwXTEeTAHGOXWDkwQUVjjZs6I",
      "cache-control": "no-cache",
      "channel-id": "",
      "content-type": "application/json;charset=UTF-8",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "terminal-src": "H5",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238; ssxmod_itna2=eqIx9D0DBA0=qiKe0dD=wg0DROvQie=DceIExnKS7qeDsmaDLQQtYy77B+YyL2u563w4/qxxHD8gFX=YFzwo=A3=YToe8k+9dd=Pr5h1F6U7oiL2R2s5j/LRnXw+6x61TaUhF2BXy8En7bdS/MKG+kQSl8U+8jXGmTKomj01Sgvcl4rQP4+=Pf4Hm4rU3PQorQEIbaNeqZv0ipt6CknxHlWR0TRgGTf4xKde5ZcWuW6SUOmfnS5VbkU0W8ILKG8L58EOUd2LlKBkIx+xFRMY6bYuWy=UfK66aStBTmXgEjfOfNN8Zj5i7e8DhVEjElwHmjeaYq9fPUUygXSlw/6Ui=peg00A0hh2rEiU0rxFGSQpR=bVA2rF2zDh56U3mePSvvO08tDw=AkWEqU=if3CebhiDupQ4ltkhYf1pop2xaKG=Ag7QYCN/0TihpLpviGpPx5YjXPpegiXXR=P0dqo4jWA3G4DQ9DiD4taN+rsie1Nc=0k=U2KKxDFqD+hDxD=; ssxmod_itna=eqIhBKD5Y5DI1DAxBaCQ5DkFLCdqYTWFmxKKDsqDcQxA5D8D6DQeGTTRro=TG=GFcY2xW4oGobmKAC0CDLYAtQDefGASx84GIDeKG2DmeDyDi5GRD09meTDem=D5xGoDPxDeDAlKDCZaq=D7xNVDe=lB8D4xBE/iwjS0d4DCODDbxPgDB6=xBjD2LQ0ACNqqlRoYGEavidyFrP4KGhpYGeQRYhaR7pakDo8aYq4F++dSoOxD; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1699606246; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1uwyAQhN9lzz4AxhucY6pUjZSqUtQceqrArBVLxkQYV22jvHtx6I9PPTKa-YadC3g9xdNuaD2sh6nvC5hGCvl9AdN93nlLsIb7h_3rIxQwTmbzK2LFsEZsjVCMtYwxTkKoipIvJQ--n02b48v2kBQXm-OMtregtNSWptEKtZiD3BKXmIMLG1pFVW0qg6WebZJZZSVcC6D3cxfouXOpg68YKhSouBT1DfF0pqCj_xdTprYmkI5_FI4r9UMZP8ZILl-al3EUmpMe4nKt9I1lfwFvFMbOD0nMUw7afQOuXwAAAP__.P0RQfruIr1AU3KR7rc-ExsMkbIc72U9-GLkXzGP2NS9lZvcscvoYIQZM0S3XmGhmNBJ32dlAWqz9WqMflOIYTtLfI1A5SUJ363wmCvffJPo3FEavp2iljxrJISpgmjQiiLRMWwFSXzx2zrWHWydRcvfbvLU05c3v49vZDw8jY9E; user_cellphone=153****1009; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFqwzAQRP9lzz5IsqRsckxJaSClEJpDT0Wy1sRgS0GWS9uQf69cJSWnHneYt7OzZwhmSsetbwOs_NT3FUwjxTKfwXbfD8ERrODxaff-DBWMk13_iVoxvdS6tQIZaxljnIRARdmXyX3oZ9P68LbZZ2VIzWFe7X5B6aitbWNQGzGD3BGXuoB3Nu2Q1NIqq2sz2yRz6CRcKqDPUxfptRvodngmX04UTQr_0nUOaSKZdIX5gnG9QI1cCswFv8ZEQylY9g4Um6Px6f5JOf1KokLkFXxQHLvgs1g-6M3tsMsPAAAA__8.G-mwocS_gCAmyeHqEhWckS3ObqK7vAo8JPttwoYDAEu1rCswZ2RX8XRoTHGuwsqtyaUYYkteDYt_eQXTnkRGoHCvE19X0GP-1Juq8T_zh9Zlp7sbrJvtpxw7E2SB1I97vvcmP9SE2GAixOwo9hdwXTEeTAHGOXWDkwQUVjjZs6I; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656d8e59b5b63a000140d8d4%22%2C%22%24device_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226506966fb2800f0001e2285e.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226506966fb2800f0001e2285e%22%7D%2C%22first_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiYjg2ZDY0NGQxMDdhLTA1NGIwNmQwMDdkZGJhLTE2NTI1NjM0LTEyOTYwMDAtMThiYjg2ZDY0NGUxMDZlIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjU2ODgxZWY0ZDRiMzMwMDAxNGUxZjAyIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22656881ef4d4b3300014e1f02%22%7D%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238,1701682780; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701682780",
      "Referer": "https://6506966fb2800f0001e2285e.caiyicloud.com/reserve/reserve-detail/personinfo",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  }).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  });

