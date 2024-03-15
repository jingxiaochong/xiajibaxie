// access-token 为 consistent_code
// function getCookie(cookieName) {
//     const strCookie = document.cookie
//     const cookieList = strCookie.split(';')
    
//     for(let i = 0; i < cookieList.length; i++) {
//       const arr = cookieList[i].split('=')
//       if (cookieName === arr[0].trim()) {
//         return arr[1]
//       }
//     }
    
//     return ''
//   }
//   getCookie('consistent_code')

// cookie 为 doc.cookie

exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzl4yY_XORYVgQRCquiBE7KTtRopsSvHQUDVd8fFpOLEcUfzze7sCbxe4uHBWQ-tW8axgGXmkOcTmOHr1vcMLdzdP749QQHzYjZXsambpiclJJWmLoUQiMqQ6pMvkTs_Xkyb_et2l5QpdvtLdJ-0WitrrCGujOjIUickmopkBq-2lE-EbKu-MuVPfsVoxQ2cC-CP4xD4ZZh4PTyRz0cOOvp_aUxLusA6_sIoUdSIJBU2ZSr4OUeecsGcO3HoDtrFv09K21cy1VcFvHOYB--gpfxBp9fDzt8AAAD__w.DDiidu5Lx-TZs-0VbsPwZOaLV0LtE7iC0-vqNhFgXDzDCsbE5NjbRE9e9hypsTRKTqaoq8AgnEpqBZIRRtHx9gOujuSRmg1LqHBmuFm39RPg7-75P6Z5lILXktQ-narkM7c3reSoB-E5Mo-ulyAw2yDNLp7trmcv-JrL7Q8_sZM'
exports.Cookie = 'user_cellphone=155****2921; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1709703851,1709907375,1709960477,1710511607; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPwzAMhf-Lzz3ENGmdHoeGQAIhTezACSWto1VqmylJETDtv5OtMHbi6Kfn79nvAN7MafcwOQ_NNA9DAXPksMwHsP3Xre8YGri7f3x7ggLibFcXsVJV1ZEWNZVWlUIIRG1Jd9mXNzd-OJlW29f1JitjarcndJc1ZbSzzhJLK1py1IoaraR6WbzYMp8I2clO2vLMl4xO3MCxAP7Y94Ff-jFnYI2q0opqjZU8I573HEzy_2Iwp7WBTfqjCIX4S4mfMfG4fLo0M3Jod2ZK123lM67zC3jnEHs_QUNLlZMZfwDHbwAAAP__.WOa7sorV87DZAcfbExIK1KrH1_w5RZdYjDIU0_WBZFVHLeNqX_9aah94zR1o7I1aMPtfZJRHnimq2xD-jUjjJRCsObQRJezTdmveKaNSNj7eqO4o5uYRaIzYFDO8R1YX-tTBKhzhGVRe-XWPUSvhXIFa3SJu__PQWQRx-xk-pDU; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzl4yY_XORYVgQRCquiBE7KTtRopsSvHQUDVd8fFpOLEcUfzze7sCbxe4uHBWQ-tW8axgGXmkOcTmOHr1vcMLdzdP749QQHzYjZXsambpiclJJWmLoUQiMqQ6pMvkTs_Xkyb_et2l5QpdvtLdJ-0WitrrCGujOjIUickmopkBq-2lE-EbKu-MuVPfsVoxQ2cC-CP4xD4ZZh4PTyRz0cOOvp_aUxLusA6_sIoUdSIJBU2ZSr4OUeecsGcO3HoDtrFv09K21cy1VcFvHOYB--gpfxBp9fDzt8AAAD__w.DDiidu5Lx-TZs-0VbsPwZOaLV0LtE7iC0-vqNhFgXDzDCsbE5NjbRE9e9hypsTRKTqaoq8AgnEpqBZIRRtHx9gOujuSRmg1LqHBmuFm39RPg7-75P6Z5lILXktQ-narkM7c3reSoB-E5Mo-ulyAw2yDNLp7trmcv-JrL7Q8_sZM; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1710511953'


exports.postData = {
    "audienceCellphone": null,
    "audienceIdentityNumber": "411121199808210015",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "井晓冲",
    "audienceCellphone":"15539502921",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}


