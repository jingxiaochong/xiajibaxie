const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzzms69ixcywqAgmEVNEDJ2THGzVSYleOg4Cq_45bU9QTx13Nm9nZIwSzpP2j7wO0fhnHCpaZYpmPYIfvu-AIWrh_eHp_hgrmxa7_llJI6ZTGRnErOCIypq3SLusyuQ3jWbTevW22eTOlbne2dhewdtRz2xklzeoCOmK1LOCNTBqr0XDpjC7-xHuHcKqAPg9DpNdhouvhmXw5UDQp_Ed3fQ7pIpn0C7MGV6gbJVStRC74NSeaSsHiO1Hs9san2yfl9EIyFChUBR8U5yF4aOvyQW-uh51-AAAA__8.HiMHe4XWBshEUq4igQBwLJXevsDOYB2QBZd-oJvIiMBtY-QqaVlqabuqkRRFJbYiAjW5MdSnaCcqOnlbj9nJ6L4WLhVamuPTzA7wzdQUPlm6vdxaEjmY3d8LvyDxPdn_fB3gQKG2tXFSyEdsXUATPz0pdcY89g-b9NVjGu-i8yM'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1702097833; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656ab90a36da9300011e3fd0%22%2C%22%24device_id%22%3A%2218c4cefcbcb1520-0d03e4cd7f572b-296e4933-400760-18c4cefcbcc2785%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c4cefcbcb1520-0d03e4cd7f572b-296e4933-400760-18c4cefcbcc2785%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEtrwzAQhP_Lnn2QLFuWfExJaSClEJpDT0WPNTHYVpDk0jbkv1ex-vCpx11mvtmdCzg1x9Nu6hy00zwMBcwBfZ4voPvPO2cRWrh_2L8-QgFh1pvfJa85t0KSRjBdM0IIpVILaZMuOQ9uuIk2x5ftIW3GaI43tF2MlcWOaaMEV-VitEgrno0rGVdaEsW4VTLzkXWWwLUAfD_3Hp_7MWXQhjSloKIWlagXxNMZvYruP4zpUprxqOIfpSSy-aGEjxBxzJ_mZkb05qSmuG4rnbHOL-ANfejdBG2Vq5zU-A24fgEAAP__.NCKAgfGzGem8r9DHvNq_oy6Fvh2UruJALfs9SLsLW9TqGLnTtcSfUerAKIdhPXFN3ZNA7IYd0DxdXFkEKlYqT-lH3W5-E1HkkH0OOQZ_mIAI89YXr6KLw3Wd9697PsKO4oD8HqHS1-J443XeWClhG0FQN_WsIAwyNtVBGZfbrQA; user_cellphone=153****1009; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzzms69ixcywqAgmEVNEDJ2THGzVSYleOg4Cq_45bU9QTx13Nm9nZIwSzpP2j7wO0fhnHCpaZYpmPYIfvu-AIWrh_eHp_hgrmxa7_llJI6ZTGRnErOCIypq3SLusyuQ3jWbTevW22eTOlbne2dhewdtRz2xklzeoCOmK1LOCNTBqr0XDpjC7-xHuHcKqAPg9DpNdhouvhmXw5UDQp_Ed3fQ7pIpn0C7MGV6gbJVStRC74NSeaSsHiO1Hs9san2yfl9EIyFChUBR8U5yF4aOvyQW-uh51-AAAA__8.HiMHe4XWBshEUq4igQBwLJXevsDOYB2QBZd-oJvIiMBtY-QqaVlqabuqkRRFJbYiAjW5MdSnaCcqOnlbj9nJ6L4WLhVamuPTzA7wzdQUPlm6vdxaEjmY3d8LvyDxPdn_fB3gQKG2tXFSyEdsXUATPz0pdcY89g-b9NVjGu-i8yM; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1702097864'




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


