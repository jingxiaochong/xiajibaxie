const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFuwjAQRP9lzzmsbRLHHEFURQIhoXLoqbKTjYiU2MhxEC3i3-vUpeoJjjuat7OzV3B6DMe1bRzM7dh1GYwD-TRfwbRfS1cTzOHldfOxhQyG0Sz-xCIvirpUKEthcoGIjClTqjr6Irl33WRaHN5X-6j0oTpMq-sfUIoGK6mNMIxPoJAkOCXwiU0g3DKgy6n19Nb2dD88krsTeR3cw5AmhlSedPiFmUSOSqLKi5LHgp9DoD4VTHt78tVR2_D_STE9kQxnXOUZnMkPrbNRTB-0-n7Y7RsAAP__.RannFTk-Eg82256reNt1hcufW9YLh9Z7GT0n86Xky7t1KBx6XeT4m-uGE7dh2KlcA8etQJ5eQNYsHUqdNe397QMjKm3SzU50hF61PYHP7mS_itEhizfuCDKnZCPS_syuk1J4OKMYY0T3TiEUDjqptTC1tJIc2JIGgNVhP3aRB34'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238,1701685253,1702004445,1702097061; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%226573f0c7ab3b12000137e330%22%2C%22%24device_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMtqwzAURP_lrr3QA1tSliktDSQEQrPoqkj2NTFYUpDk0iTk3ytHfWTVLjXMnNGdC3g9pcPK9R4WbhrHCqaIobwvYIbzg-8QFvD0vH7bQAVxMssfsambppOKCMlNzQkhlCojVZd9Obnz42xa7l8fd1mxqd3P6O4WFLwnrdCGG8rmIBfIGZbgPzZO4FoBfhyHgC-DzR1UEMEkJapuJLshtkcMOvk_2_rc1gbU6ZfCiBLflHiKCW25tCxjMbQH7dL9Wvkb9_0VvGOIg3dZLFM6bb8A108AAAD__w.Jron21VT0rJ0NXfIkiY_CMyF-oEELz1AZyc-tKEZ-gJ3Rklzls_M-7FY9eSAb1ALZgTjUUVjSGbhp26a7mTMNE42cqaQmK-XOvDLipkByyqkNlUx_luzkzcGj2m3oEXJsiXS8-Ov0yAtn2vAt-q3jFFJ3nSB6fQ0QCAwdnfDAsI; user_cellphone=132****7245; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFuwjAQRP9lzzmsbRLHHEFURQIhoXLoqbKTjYiU2MhxEC3i3-vUpeoJjjuat7OzV3B6DMe1bRzM7dh1GYwD-TRfwbRfS1cTzOHldfOxhQyG0Sz-xCIvirpUKEthcoGIjClTqjr6Irl33WRaHN5X-6j0oTpMq-sfUIoGK6mNMIxPoJAkOCXwiU0g3DKgy6n19Nb2dD88krsTeR3cw5AmhlSedPiFmUSOSqLKi5LHgp9DoD4VTHt78tVR2_D_STE9kQxnXOUZnMkPrbNRTB-0-n7Y7RsAAP__.RannFTk-Eg82256reNt1hcufW9YLh9Z7GT0n86Xky7t1KBx6XeT4m-uGE7dh2KlcA8etQJ5eQNYsHUqdNe397QMjKm3SzU50hF61PYHP7mS_itEhizfuCDKnZCPS_syuk1J4OKMYY0T3TiEUDjqptTC1tJIc2JIGgNVhP3aRB34; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702097106'




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


