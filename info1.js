const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9lzz5IlhTZPqakNJBSCM2hpyLJK2KwrSDLpW3Iu3eN6tBTLws7zDf7c4Vg5nTejz5AM859X8A8Ycz9FWz3_RBahAYenw7vz1DANNvtXdxI0XKmHKKoUTDGuBalby35iDyGfjFtT2-7IylDcqcluiVNmdpbbyuUlrnKV45pbmWlM3i3bZRs0bpaa14ps-RLKqyEWwH4eekivnYDrosT-XLBaFL4l-Y0xEU06RfmmpWUqbQslaADv6aEQz4w5w4Y3dmM6e-TaPpKUr4s4APj1IURGpk_OJp1sdsPAAAA__8.ORX8Ohu3Gi72Pb8ZgIqcfVwQJIFBrq3zpS-n6xuMdSe77d-3zpa6j6NET339_Eo_eR9F22rlFvau6nEzVD86Vl_6tW3kk4CfcpKQN5LWZ9H8YUYJC7rcCPpcD_bbe7kKZrAaOPeNQT-lZm5Nr7_n0Xzoum8BilD1QLlPAdD0RWk'
exports.Cookie = 'user_cellphone=155****2921; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699580678,1702002517; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22654debc977185a0001400002%22%2C%22%24device_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%22643d105cee39e30001732fdb.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%22643d105cee39e30001732fdb%22%7D%2C%22first_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kE1PxCAYhP_Le-4BWii0xzVrNNGYbNyDJ8PH22yTAhugRt3sf5daXffkhYTJzDMwJwhqzod7PwTo_TxNFcwJ43o_gR4_b4JF6OH27uH1ESpIs95cxJY1lhJuEJsOG0IIFU09WF18JbkL02La7F-2u6K4bPYL2haNq27Qg5bINDFykIYIqpkUa_BiazmzqE0nBJVcLXxWDlLDuQJ8P44Rn0dXOqgoedlywWrOvhFPR4wqh38xtLSZiCr_UeoC_6Wkj5TRrT9dl3EYzUH5fL1WecZ1fwVvGNMYPPRsndIr9wM4fwEAAP__.JQNpmLxJCVT81HclVToeX_lhXbjRoyD4rPwESC_0N04mW3uWo1yTfoIdrhu4jZQPAKHWOLURQfdrFZHWY9j7qOg89HtUfGh8NuR2NYi98lWt1qNG6uWgdrDyIqxKyNhYnVRlBjdpEwV5PKoiTAm8lNZ3tKwsV8RnJml1ZnOxqrA; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9lzz5IlhTZPqakNJBSCM2hpyLJK2KwrSDLpW3Iu3eN6tBTLws7zDf7c4Vg5nTejz5AM859X8A8Ycz9FWz3_RBahAYenw7vz1DANNvtXdxI0XKmHKKoUTDGuBalby35iDyGfjFtT2-7IylDcqcluiVNmdpbbyuUlrnKV45pbmWlM3i3bZRs0bpaa14ps-RLKqyEWwH4eekivnYDrosT-XLBaFL4l-Y0xEU06RfmmpWUqbQslaADv6aEQz4w5w4Y3dmM6e-TaPpKUr4s4APj1IURGpk_OJp1sdsPAAAA__8.ORX8Ohu3Gi72Pb8ZgIqcfVwQJIFBrq3zpS-n6xuMdSe77d-3zpa6j6NET339_Eo_eR9F22rlFvau6nEzVD86Vl_6tW3kk4CfcpKQN5LWZ9H8YUYJC7rcCPpcD_bbe7kKZrAaOPeNQT-lZm5Nr7_n0Xzoum8BilD1QLlPAdD0RWk; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702002579'




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


