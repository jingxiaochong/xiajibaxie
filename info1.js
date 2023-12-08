const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzzms48SxeywqAgmEVNEDJ2Q7azVSYleOg4Cq_46L24oTxx3Nm93ZIwS9pP2jdwFWfhnHCpaZYpmPYIbvu9ATrOD-4en9GSqYF7O-iaIVopcKO8lNyxGRMWWk6rMvk9swnk3r3dtmm5Up2d05us9aq5UzzkhqDFrppMWOmUZ2BbzZcr6UjFzTN4b_5jfEHNZwqoA-D0Ok12Gi6-GZfDlQ1Cn8S7O8xEbS6QKzDmusueKiRcwFv-ZEUylYcieKdq99-vukvP1Ccsa4qOCD4jwEn8W6vNDr62WnHwAAAP__.SEpcTqg-P3mpYWi5XvFJ7maw8RlD5h9mDbeohXhZYXXUUQrXHIruAebnzyff5u8yBzuSVCqHCLMiPA9uuuumVNYi8Qb0Ul3miSVL_r8AwtjLntKvinAVOMvJsHARqL0o_Ra_qXv9HsfiDpCk_dMHl6jIY4AL64BAIDyFYqjOzWY'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1702023898; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218c4887a4f057c-0c9bfae51db4-16525634-1296000-18c4887a4f11304%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c4887a4f057c-0c9bfae51db4-16525634-1296000-18c4887a4f11304%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzms4yR2eiwCgQRCquiBE_LPWo0U25XjIKDqu-M2UHriuKPZb3bnAFHNefcQXIRVmMexgnmitMwH0MPXTbQEK7i7f3x7ggqmWa8vYtd2nZU9Csl1yxGRsV7L3hZf2dzE8WRab19vN0Xx2WxPaFu0VvVOOy2p0WikkwYF040Uy-LFVvhSMnKNbTQ_8xtiDms4VkAf-yHRy-BLBhMoahQ971rEM-J5T0nl-C-GlTSTSOU_So01_6VMn1Mmv3y6NOMpmZ0K-bqtcsZ1fgXvlKYhhiLWS5dB-R_C8RsAAP__.VxCThlpVB2_MYHGhtMt2eJAzj5uCVuETkYgohKHblUl1o-0zpqQctjAuqVIBrD9E4FvBNzFxXF-GqlcONAdF8juHDBZ6jjFCO_a62sPLd6BEGp_u1bygrzKnmwoAm2NUrZ5Ewjtb5wjMNlnsMUH0NS8lhjLRd39HVpzS1yIMEpE; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzzms48SxeywqAgmEVNEDJ2Q7azVSYleOg4Cq_46L24oTxx3Nm93ZIwS9pP2jdwFWfhnHCpaZYpmPYIbvu9ATrOD-4en9GSqYF7O-iaIVopcKO8lNyxGRMWWk6rMvk9swnk3r3dtmm5Up2d05us9aq5UzzkhqDFrppMWOmUZ2BbzZcr6UjFzTN4b_5jfEHNZwqoA-D0Ok12Gi6-GZfDlQ1Cn8S7O8xEbS6QKzDmusueKiRcwFv-ZEUylYcieKdq99-vukvP1Ccsa4qOCD4jwEn8W6vNDr62WnHwAAAP__.SEpcTqg-P3mpYWi5XvFJ7maw8RlD5h9mDbeohXhZYXXUUQrXHIruAebnzyff5u8yBzuSVCqHCLMiPA9uuuumVNYi8Qb0Ul3miSVL_r8AwtjLntKvinAVOMvJsHARqL0o_Ra_qXv9HsfiDpCk_dMHl6jIY4AL64BAIDyFYqjOzWY; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702023941'




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


