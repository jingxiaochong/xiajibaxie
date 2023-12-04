const axios = require('axios')


// 第一段请求的
const url = 'https://6566d890783b53000119b89d.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5';

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
    "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPAyEQhf_LnPcAAgvssUajSRuTxh48GWCHdJNdaFjWqE3_u1TaxpPHeXnfm3lzhGiWvH8OPkIXlnFsYJkx1fkIdvi-jz1CB49P6_cNNDAvdnUTW9G2vdJEKmYFI4RQqq3SffEVchvHs2m1e3vYFmXKbneO7osmjPbWW4XcEqe8ckRSy5Ws4M1W8pWi6HnPLfvN50g9uYNTA_h5GBK-DhNeDy_kywGTyfFfmpYlLqHJF5hKQotRC8aELAW_5oxTLVhzJ0xub0L--6Sy_ULqlgrWwAemeYgBOl0_GMz1sNMPAAAA__8.EXq70AOEfnNo1sqzjJLB8jS-L3nP4pZ5LbHSC2bUmaNkL96Y_NBEDvN7fRwmHj7pbp3JHFwWUi2QeCTJANv-qsaAv815JC93O-0tv0OsGB36x7-htuo9UAT9Xr7AN5yHC8BAtoboTeVFsJ4Jej_XzgrnDUDPCJkTkSVkItey4K8",
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
    "cookie": "user_cellphone=155****2921; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1701350256; ssxmod_itna=mqjxcQGQqGqquDl4iqYI7PCqDISujpij6OCE=hx0HpreGzDAxn40iDtP=N2jPpe4ewQfDoohhrjIQOw3m3ZnbpTso+DB3DEx065HVKxiiyDCeDIDWeDiDG+7D=xGYDjjtUlcDm4i7DYqGRDB=U9qDjFwGQDO=qxG3y9DDlYhmQzitDQ4GWFTt6DitDx7QDAqu3f7=DjqGgDBdqz1wcDDt7p1qMmqc39WpReWiDtqD9DC=Db+Lrx0Py0kusIBEWj+hYQGp5fGhx8Sx4bgG5C7GduY4UO0m39D4stxwY9DDACV4sziD===; ssxmod_itna2=mqjxcQGQqGqquDl4iqYI7PCqDISujpij6OCE=xnF89eDsYQDLW==oNWSzXoTB/iKGFbBkvjzV4bWIhwoh=jBNqqL7mGaj8aRcapj4q/uwnIsd3lSXeZekjRDujHtca+OQO59z+Qzs06cUMNctdhGGbemQ3hfQm=z8j5AfAf3X803RljfKQ2KOl5qT3xHSgf5ChWw7=waXf5vRYwGIAv5eE+T=uWyUgcLzwjhUg5yjTB2BZ=vi9YyFFiOWZgf58OqPR7IL8nnRF7XOtYvnFS+hKkc5K9cN/1I6dSuzKzZm5UgYv1=wHBgEPvPNMpXMOvuc3Df0Z2eI7UnQY6hih=AEhvMAp8mrqgmkGXNtA5Ov0jjliRcgegGXaUj3iXsjR2ZRVoQU1R6QjWDG29GdD08DiQs9h=QGHBh5WDxD===; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznYdX7WORaBQAIhVfTACdnOWo0U25XtIKDqu-M2UHriuKPZb3bnAEHNeffgbYDez9NUwZwoLvMB9Ph1EwaCHu7uH9-eoII06_VFbJu2HVCyDoVuBGOMc6lRDsVXNjdhOpnW29fbTVFcNtsTeihao6TVViPVmhm0aFjHdY3dsnixFT4iJ1sPtRZnfk3cshUcK6CP_RjpZXQlg3esxW4lGyEaPCOe9xRVDv9ieEkzkVT-o_Bi_KWkz5TJLZ8uzTiKZqd8vm6rnHGdX8E7xTQGD71cqvTK_QCO3wAAAP__.XjWHRXjTMRLLw7MP7SLJZZVm14Lczqq2-SrsZMpRvCs2PLsMlhEjh_hG2Wpc6ukkRrA9MYh_vWFKKmP58cazmrQKSrkqgMx5Fsx7ctZq9rqHi3Cj5jQvS5mumgF9LYnpkcAOBxD95rcnJ2aMj0at2AFufUoLTwGH8LUu3Xf67Ds; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPAyEQhf_LnPcAAgvssUajSRuTxh48GWCHdJNdaFjWqE3_u1TaxpPHeXnfm3lzhGiWvH8OPkIXlnFsYJkx1fkIdvi-jz1CB49P6_cNNDAvdnUTW9G2vdJEKmYFI4RQqq3SffEVchvHs2m1e3vYFmXKbneO7osmjPbWW4XcEqe8ckRSy5Ws4M1W8pWi6HnPLfvN50g9uYNTA_h5GBK-DhNeDy_kywGTyfFfmpYlLqHJF5hKQotRC8aELAW_5oxTLVhzJ0xub0L--6Sy_ULqlgrWwAemeYgBOl0_GMz1sNMPAAAA__8.EXq70AOEfnNo1sqzjJLB8jS-L3nP4pZ5LbHSC2bUmaNkL96Y_NBEDvN7fRwmHj7pbp3JHFwWUi2QeCTJANv-qsaAv815JC93O-0tv0OsGB36x7-htuo9UAT9Xr7AN5yHC8BAtoboTeVFsJ4Jej_XzgrnDUDPCJkTkSVkItey4K8; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1701350256; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218b9a31decb1b04-0e1139cf4b06f5-26031051-3686400-18b9a31decc293d%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218b9a31decb1b04-0e1139cf4b06f5-26031051-3686400-18b9a31decc293d%22%7D; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701690651",
    "Referer": "https://6566d890783b53000119b89d.caiyicloud.com/reserve/reserve-detail/personinfo",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log('失败');
  });


//reservationConfigId 在local的 reserveId
// return
let saveTime = '2023-12-2 19:30-21:30'
let time = saveTime.split(" ")
t = time[0].replace(new RegExp(/-/gm), "/")
n = new Date(t).getTime()
let times = time[1].split('-')
let urlPost = 'https://6566d890783b53000119b89d.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5'
let dataPost = {
  "reservationConfigId": "656837b0a70d2d00015d27f1",
  "reservationDate": n,
  "startTime": times[0],
  "endTime": times[1],
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
axios.post(urlPost, dataPost,
  {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPAyEQhf_LnPcAAgvssUajSRuTxh48GWCHdJNdaFjWqE3_u1TaxpPHeXnfm3lzhGiWvH8OPkIXlnFsYJkx1fkIdvi-jz1CB49P6_cNNDAvdnUTW9G2vdJEKmYFI4RQqq3SffEVchvHs2m1e3vYFmXKbneO7osmjPbWW4XcEqe8ckRSy5Ws4M1W8pWi6HnPLfvN50g9uYNTA_h5GBK-DhNeDy_kywGTyfFfmpYlLqHJF5hKQotRC8aELAW_5oxTLVhzJ0xub0L--6Sy_ULqlgrWwAemeYgBOl0_GMz1sNMPAAAA__8.EXq70AOEfnNo1sqzjJLB8jS-L3nP4pZ5LbHSC2bUmaNkL96Y_NBEDvN7fRwmHj7pbp3JHFwWUi2QeCTJANv-qsaAv815JC93O-0tv0OsGB36x7-htuo9UAT9Xr7AN5yHC8BAtoboTeVFsJ4Jej_XzgrnDUDPCJkTkSVkItey4K8",
      "cache-control": "no-cache",
      "channel-id": "",
      "content-type": "application/json;charset=UTF-8",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "terminal-src": "H5",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "user_cellphone=155****2921; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1701350256; ssxmod_itna=mqjxcQGQqGqquDl4iqYI7PCqDISujpij6OCE=hx0HpreGzDAxn40iDtP=N2jPpe4ewQfDoohhrjIQOw3m3ZnbpTso+DB3DEx065HVKxiiyDCeDIDWeDiDG+7D=xGYDjjtUlcDm4i7DYqGRDB=U9qDjFwGQDO=qxG3y9DDlYhmQzitDQ4GWFTt6DitDx7QDAqu3f7=DjqGgDBdqz1wcDDt7p1qMmqc39WpReWiDtqD9DC=Db+Lrx0Py0kusIBEWj+hYQGp5fGhx8Sx4bgG5C7GduY4UO0m39D4stxwY9DDACV4sziD===; ssxmod_itna2=mqjxcQGQqGqquDl4iqYI7PCqDISujpij6OCE=xnF89eDsYQDLW==oNWSzXoTB/iKGFbBkvjzV4bWIhwoh=jBNqqL7mGaj8aRcapj4q/uwnIsd3lSXeZekjRDujHtca+OQO59z+Qzs06cUMNctdhGGbemQ3hfQm=z8j5AfAf3X803RljfKQ2KOl5qT3xHSgf5ChWw7=waXf5vRYwGIAv5eE+T=uWyUgcLzwjhUg5yjTB2BZ=vi9YyFFiOWZgf58OqPR7IL8nnRF7XOtYvnFS+hKkc5K9cN/1I6dSuzKzZm5UgYv1=wHBgEPvPNMpXMOvuc3Df0Z2eI7UnQY6hih=AEhvMAp8mrqgmkGXNtA5Ov0jjliRcgegGXaUj3iXsjR2ZRVoQU1R6QjWDG29GdD08DiQs9h=QGHBh5WDxD===; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznYdX7WORaBQAIhVfTACdnOWo0U25XtIKDqu-M2UHriuKPZb3bnAEHNeffgbYDez9NUwZwoLvMB9Ph1EwaCHu7uH9-eoII06_VFbJu2HVCyDoVuBGOMc6lRDsVXNjdhOpnW29fbTVFcNtsTeihao6TVViPVmhm0aFjHdY3dsnixFT4iJ1sPtRZnfk3cshUcK6CP_RjpZXQlg3esxW4lGyEaPCOe9xRVDv9ieEkzkVT-o_Bi_KWkz5TJLZ8uzTiKZqd8vm6rnHGdX8E7xTQGD71cqvTK_QCO3wAAAP__.XjWHRXjTMRLLw7MP7SLJZZVm14Lczqq2-SrsZMpRvCs2PLsMlhEjh_hG2Wpc6ukkRrA9MYh_vWFKKmP58cazmrQKSrkqgMx5Fsx7ctZq9rqHi3Cj5jQvS5mumgF9LYnpkcAOBxD95rcnJ2aMj0at2AFufUoLTwGH8LUu3Xf67Ds; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPAyEQhf_LnPcAAgvssUajSRuTxh48GWCHdJNdaFjWqE3_u1TaxpPHeXnfm3lzhGiWvH8OPkIXlnFsYJkx1fkIdvi-jz1CB49P6_cNNDAvdnUTW9G2vdJEKmYFI4RQqq3SffEVchvHs2m1e3vYFmXKbneO7osmjPbWW4XcEqe8ckRSy5Ws4M1W8pWi6HnPLfvN50g9uYNTA_h5GBK-DhNeDy_kywGTyfFfmpYlLqHJF5hKQotRC8aELAW_5oxTLVhzJ0xub0L--6Sy_ULqlgrWwAemeYgBOl0_GMz1sNMPAAAA__8.EXq70AOEfnNo1sqzjJLB8jS-L3nP4pZ5LbHSC2bUmaNkL96Y_NBEDvN7fRwmHj7pbp3JHFwWUi2QeCTJANv-qsaAv815JC93O-0tv0OsGB36x7-htuo9UAT9Xr7AN5yHC8BAtoboTeVFsJ4Jej_XzgrnDUDPCJkTkSVkItey4K8; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1701350256; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218b9a31decb1b04-0e1139cf4b06f5-26031051-3686400-18b9a31decc293d%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218b9a31decb1b04-0e1139cf4b06f5-26031051-3686400-18b9a31decc293d%22%7D; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701690651",
      "Referer": "https://6566d890783b53000119b89d.caiyicloud.com/reserve/reserve-detail/personinfo",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  }).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log('预约失败');
  });



