const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9FZx8ky9ZPjikpDaQUQnPoqWjlFTHYUpDl0jbk3SujOvTU4w7zzc7ulQQzp_Peu0A2fh6GiswTxjJfCfTfD6FDsiGPT4f3Z1KRaYbtXRQNl9ZAU2uG2FJKGWeKa5Z9mTyGYTFtT2-7Y1bGZE9LdJe11mgHDhQ2QK1yylLJoFGygHebaBvBGYATHRpY8oEr0Upyqwh-XvqIr_2Ia_FMvlwwmhT-pUVeYiOa9AszSWvKapmbC5UP_JoSjuXAkjtitGfj098n5e0rqTXL2AfGqQ9-EcsLvVmb3X4AAAD__w.QZnU0oeFruZo0JEZgydDdBOCCKAWd8ZkedHDjNcQg_0bb7GQ12gdQzIiv5QYDxbOFKG1ed5BxzlJ7XDggv8swsD9W7ti2yU2ktaVp5YDG1f9PxSmmg4_KdeDg372N_peZKlekT3KpH0avjvagJkfpsO5xkmwFaQqYlyFVg66iQk'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1702012558; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22654631bbf6deab0001b38657%22%2C%22%24device_id%22%3A%2218c47da9c80402-08adc1f3c0e95f-16525634-1296000-18c47da9c81209c%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226437cab4291ee50001318391.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226437cab4291ee50001318391%22%7D%2C%22first_id%22%3A%2218c47da9c80402-08adc1f3c0e95f-16525634-1296000-18c47da9c81209c%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznY-bGdHouKqFSEVNEDJ-R11mqkOK5sBwFV3x2HQOmJo0cz33jnDF5P6bgdrYfVOA1DAVOksLzPgP3nne8IVnD_sHt9hALihOurKOpKGo112XKihjHGK66qlmdfTu79MJvWh5fNPisumcOM7rLW6NaiRUU1MqOsMkxyrJVcglebaGpRcUQrOtI487FSopFwKYDeT32g597lDi5zvhUyl4v2G_F0oqCT_xcjcpsJpNMfpWS8_KXEj5jILZcuyzgK5qjHdLtW_sZtfwFvFGLvx1lcthy1-yFcvgAAAP__.XlvhYQPxzascw6TeCuEypbrSE4a13gNwigsXiWj7MpNJnDkPGYcJqZ-2qHTSt8AiP39a2xtzwckdsiqPPXx-1Jjn-xu6OyrjBTMQ0e_clyxTfBi7mkyVeMFniZAi8kW7pWCw-tSwnVBvyzgpKlydkNQtk__kRoYtYuzPjcVcB3o; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9FZx8ky9ZPjikpDaQUQnPoqWjlFTHYUpDl0jbk3SujOvTU4w7zzc7ulQQzp_Peu0A2fh6GiswTxjJfCfTfD6FDsiGPT4f3Z1KRaYbtXRQNl9ZAU2uG2FJKGWeKa5Z9mTyGYTFtT2-7Y1bGZE9LdJe11mgHDhQ2QK1yylLJoFGygHebaBvBGYATHRpY8oEr0Upyqwh-XvqIr_2Ia_FMvlwwmhT-pUVeYiOa9AszSWvKapmbC5UP_JoSjuXAkjtitGfj098n5e0rqTXL2AfGqQ9-EcsLvVmb3X4AAAD__w.QZnU0oeFruZo0JEZgydDdBOCCKAWd8ZkedHDjNcQg_0bb7GQ12gdQzIiv5QYDxbOFKG1ed5BxzlJ7XDggv8swsD9W7ti2yU2ktaVp5YDG1f9PxSmmg4_KdeDg372N_peZKlekT3KpH0avjvagJkfpsO5xkmwFaQqYlyFVg66iQk; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702012729'




exports.Referer = `https://${urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`
exports.putUrl = `https://${urlBase}.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5`
exports.putData = {
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


exports.postUrl = `https://${urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
exports.postData = {
    "audienceCellphone": null,
    "audienceIdentityNumber": "411121199808210015",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "井晓冲",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}


