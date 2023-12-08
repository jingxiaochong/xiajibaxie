const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEtrwzAQhP_Lnn3Qw7HlHFNaWkgohObQU9FjTQy2FGS5tA35712hpOTU4w7z7c7sGYJe0vHF9wHWfhnHCpYZY5nPYIafh-AQ1vD0vP3YQQXzYjZ_YlNLx9nKIsoOJWOMt1L0zpCPyH0Ys2lzeH_ckzIle8irXQZXtcNeGqtVo0UGuUNeNwW8s7VCMWVrUTc9yzZpOsM7uFSAX6ch4tsw4S04ka8njDqFf2lFR2xEna4wbxklEEooslPB7znhVAqWvRNGe9Q-3T-Jrl9JntkKPjHOQ_Aklg96fQt2-QUAAP__.ejGqrYhGtTWcKJF3H4Uzgz46RFIzkje0JPcAE2aNmJ3Am7_LLwcQoFqBIcy9RuMMa9-VsP_S_ggNO4FYlGeGuG-LaCbRUXtadn1wUkl9hnHZ-OZnh1dgQnAlsLdGDeqBNxbzGXXzgueD7AarirHdyOgjDiDiN_6cZY6OcUTvE2c'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1702002751; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%226572808c4246f000013b9b19%22%2C%22%24device_id%22%3A%2218c4744f7b4b13-062c0f46258243-16525634-1296000-18c4744f7b51c63%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%22643d105cee39e30001732fdb.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%22643d105cee39e30001732fdb%22%7D%2C%22first_id%22%3A%2218c4744f7b4b13-062c0f46258243-16525634-1296000-18c4744f7b51c63%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMtOwzAURP_lrrPwI3WcLotAIIGQKrpghfy4USPFdmU7CKj67ziYR1YsPZo5cz1nCGrOxzs_BNj6eZoamBPG-j6DHj-ugkXYws3t_csDNJBmvfsVRcstJRuDyHvkhBDacTZYXXwluQ_TYtodnq_3RXHZHBa0XYKb1uLAtVFSKLYEqUXaihpc2TomiTQta8VAFhvXvaY9XBrAt9MY8Wl0pYN2pKNSSCaL_wvxeMKocvgXI0ubiajyH6Wcwn4o6T1ldPWndRmH0RyVz-u1yhnr_gZeMaYx-CLWKb1y34DLJwAAAP__.WjreubxgntwsA6fxiHksYW9kRW6RdQkta35M2q3S52u0BvqexaD6tFsiJahJd7XexSWIg8dSXZU_oKYTdRiO33Xay5mWxL2EDIXIWmhgVB69D1I0frHjexVd_ToassRA3CmMIUtM98CTgFYGEecPcemv0EnVOqHg0CPlKTtQzaA; user_cellphone=153****1009; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEtrwzAQhP_Lnn3Qw7HlHFNaWkgohObQU9FjTQy2FGS5tA35712hpOTU4w7z7c7sGYJe0vHF9wHWfhnHCpYZY5nPYIafh-AQ1vD0vP3YQQXzYjZ_YlNLx9nKIsoOJWOMt1L0zpCPyH0Ys2lzeH_ckzIle8irXQZXtcNeGqtVo0UGuUNeNwW8s7VCMWVrUTc9yzZpOsM7uFSAX6ch4tsw4S04ka8njDqFf2lFR2xEna4wbxklEEooslPB7znhVAqWvRNGe9Q-3T-Jrl9JntkKPjHOQ_Aklg96fQt2-QUAAP__.ejGqrYhGtTWcKJF3H4Uzgz46RFIzkje0JPcAE2aNmJ3Am7_LLwcQoFqBIcy9RuMMa9-VsP_S_ggNO4FYlGeGuG-LaCbRUXtadn1wUkl9hnHZ-OZnh1dgQnAlsLdGDeqBNxbzGXXzgueD7AarirHdyOgjDiDiN_6cZY6OcUTvE2c; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702002833'




exports.Referer = `https://${urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`
exports.putUrl = `https://${urlBase}.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5`
exports.putData = {
    "identityAuthRequests": [
        {
            "idType": "ID_CARD",
            "idTypeName": "身份证",
            "idNo": "41112119980912651X",
            "name": "李一帆"
        }
    ],
    "src": "H5"
}


exports.postUrl = `https://${urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
exports.postData = {
    "audienceCellphone": null,
    "audienceIdentityNumber": "41112119980912651X",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "李一帆",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}


