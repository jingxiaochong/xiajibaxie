const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznYiX97LAKB1AqpogdOyHbWaqTErhwHAVXfHRfTihPHHc03u7MniGbJh6fgI6zCMo4NLDOmOp_ADl93sUdYwcPj5m0LDcyLXd9EwYXolSZSdZZ3hBBKtVW6L75C7uJ4Ma33r_e7okzZ7S_RfdG40d56q5BZ4pRXjkhqmZIVvNlKvlIUPeuZ7X7yGVJPWjg3gB_HIeHLMOH18EI-HzGZHP-laVniEpr8C1NJWqIlF7yVtBT8nDNOtWDNnTC5gwn575PK9kpSwqTgDbxjmocYitjVFwZzvez8DQAA__8.aZGJ-sH2X2rtLDyo1aaTlU4QmivILBs7bA77gbEf3Yk3rP5o4ZrW93tsR0399o0AFtAU5uw6f-FsRb7atKdUDDVfIQWGvTn2YVkAj-c6ssJ8yH0BsDKPo94OAKyOVcj5enmoKZes-WZ_KSZ_Q3lZ6V7T5GTAL8E4CUmw2ABiZdk'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1702097534; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218c4ceb3adc1176-03ac81dd244503-16525634-1296000-18c4ceb3add1724%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c4ceb3adc1176-03ac81dd244503-16525634-1296000-18c4ceb3add1724%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPAyEQhf_LnPcA7LJAjzUaTTQmjT14MrA7pJss0ABr1Kb_XVq09uRxXt58b-YdIOgl7x68DbDyyzw3sCSMdT6Amb5uwoiwgrv7x7cnaCAtZn0Re973o1REyNbwlhBCqTJSjcVXNjdhPpnW29fbTVFcHrYn9Fg0rpU11kjsDBmklQMR1HRS1MWLrfClpGi7sTPtmd8htYTBsQH82E8RXyZXMqgggknKe84EOyOe9xh1Dv9iaEkbIur8R2FEiV9K-kwZXf20NuMwDjvt83Vb5Yzr_AbeMaYp-CK2tUuv3Q_h-A0AAP__.S2SaW_pkyKKk6qUttAVwUNetOfI6UQRPIiIuDJxHXuKmdxEpT7ux-xB69LEvkQvnnvtQg76Q4cpkiTwuv4L_HsY7p4jhBq9cj70XX5s95ONLNVz1d6IQiGkKj3NVLh8W9g9on6Lf1gXFSVHUICm2emrwk0igXjkKtdDXuEjnfcw; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznYiX97LAKB1AqpogdOyHbWaqTErhwHAVXfHRfTihPHHc03u7MniGbJh6fgI6zCMo4NLDOmOp_ADl93sUdYwcPj5m0LDcyLXd9EwYXolSZSdZZ3hBBKtVW6L75C7uJ4Ma33r_e7okzZ7S_RfdG40d56q5BZ4pRXjkhqmZIVvNlKvlIUPeuZ7X7yGVJPWjg3gB_HIeHLMOH18EI-HzGZHP-laVniEpr8C1NJWqIlF7yVtBT8nDNOtWDNnTC5gwn575PK9kpSwqTgDbxjmocYitjVFwZzvez8DQAA__8.aZGJ-sH2X2rtLDyo1aaTlU4QmivILBs7bA77gbEf3Yk3rP5o4ZrW93tsR0399o0AFtAU5uw6f-FsRb7atKdUDDVfIQWGvTn2YVkAj-c6ssJ8yH0BsDKPo94OAKyOVcj5enmoKZes-WZ_KSZ_Q3lZ6V7T5GTAL8E4CUmw2ABiZdk; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702097570'




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


