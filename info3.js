const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzn4P06ORUUggZAqeuCEHHujRkrsynEQUPXdcXCLeuK4q_lmdvYEwSzp8Oj7AK1fxrGCZcZY5hN0w_ddcAgt3D88vT9DBfPSbf6WSvDamk6whiJKQgjlVPOGZl0md2FcRZv923aXN1Oy-9XaraAUDnveWaOVYStIHVKhCngjk1r0ymhpFf2VdUIwp-BcAX4eh4ivw4TXwzP5csRoUviXljnERjTpAtOaMEKZlk1T61zwa044lYLFd8JoD8an2yfl9AuZjWVTwQfGeQgeWl4-6M31sPMPAAAA__8.dnufvFoItudgdZXvPmZ6zZhVKJilSc-CdabUfWgoGB9xPGB08oisKalmC9ks56zv86vM_3m4Q8_L2O4LZDgsNleaRuv9vhylkxpMbWmGDyND5b4TJIsElJTmn4Jv2i7MLOGv-3NR8OcERnK5Gdvy_JrTFgcSRALnLCTxH77yoOU'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1702012830; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2265584f6a85c6120001b442d6%22%2C%22%24device_id%22%3A%2218c47dec24e1618-00d4d1d00c6608-296e4933-400760-18c47dec24f106a%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226437cab4291ee50001318391.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226437cab4291ee50001318391%22%7D%2C%22first_id%22%3A%2218c47dec24e1618-00d4d1d00c6608-296e4933-400760-18c47dec24f106a%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEtrwzAQhP_Lnn2wrIctH1NSGkgphObQU5HlNTFYUpDk0jbkv1eO-vCpx11mvtmdCzg1x9PODg5aO09TAXNAn-cLdOPnnesRWrh_2L8-QgFh7ja_S8ForVXHKkkQeVmWhJKGSpJ0yXlw0yLaHF-2h7QxUR8XdL8YOetxoJ1WjVDVYiQ9EiaycSXjDRuEargW5CbrGKt6AdcC8P08enweTcogdVkTKRouZS1viKczehXdvxie0rRHFf8oVUmqH0r4CBFN_jQ3Y9Drk7Jx3VY6Y51fwBv6MDoLLc1VWmW-AdcvAAAA__8.XmQnG2Uvg3BWBWOmJb8W0BV6SZcUqBtt3eMmWCugnO0Ieum3WjaHlbq8wReQSQYDa8n_dAYQDzxBnRD1OpVL6t245KH3ACAWkQCn1KvdKHXH9AfGn5KTlRwLMyP_BZhTkoZLcndDpz2GVia1Zr2v85G6m0H8eDtnzCpzctvK_9s; user_cellphone=153****1009; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzn4P06ORUUggZAqeuCEHHujRkrsynEQUPXdcXCLeuK4q_lmdvYEwSzp8Oj7AK1fxrGCZcZY5hN0w_ddcAgt3D88vT9DBfPSbf6WSvDamk6whiJKQgjlVPOGZl0md2FcRZv923aXN1Oy-9XaraAUDnveWaOVYStIHVKhCngjk1r0ymhpFf2VdUIwp-BcAX4eh4ivw4TXwzP5csRoUviXljnERjTpAtOaMEKZlk1T61zwa044lYLFd8JoD8an2yfl9AuZjWVTwQfGeQgeWl4-6M31sPMPAAAA__8.dnufvFoItudgdZXvPmZ6zZhVKJilSc-CdabUfWgoGB9xPGB08oisKalmC9ks56zv86vM_3m4Q8_L2O4LZDgsNleaRuv9vhylkxpMbWmGDyND5b4TJIsElJTmn4Jv2i7MLOGv-3NR8OcERnK5Gdvy_JrTFgcSRALnLCTxH77yoOU; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702012865'




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


