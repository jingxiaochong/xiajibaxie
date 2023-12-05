//活动域名前缀
urlBase = '643d105cee39e30001732fdb'

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9lzz7oN5J9TGlpoaUQmkNPRZJXxGBLQZZL25B3r4yS0FMvAg3zzc7uCaJZ8uEp-AhdWMaxgWXGVP8nsMPPXewROnh4fP54gQbmxW5v4kbwnhLpEHmLnBBCFWe-t8VXyF0cV9N2_36_K8qU3X6N7osmTeuttxqFJU577YiiVmhVwZttI0WP1rVKUS3Nmi_KQxicG8Cv45DwbZjwWryQr0dMJsd_aVqGuIQmX2CqSm2ltGCC6bLg95xxqgvW3AmTO5iQ_x6pTL-QWhLBGvjENA8xQMfrBYO5Fjv_AgAA__8.iYbxjm4c8Hcv89fy3TIxuzDgztfYeKMSeCqNd93rF7uCIcPTIwoFe0Fn5cMnwY5FDrvPl1MSvmlIdekPQwJMahpus_ZhkW-577nEKJiNuRFYR5Qv2cPTWoIyjQUUPhhGIYZ1jTIFcLXz-Trx47QW6daCCSdbLrNaqcUa9_r6W14'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1701350228,1701777812; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22654debc977185a0001400002%22%2C%22%24device_id%22%3A%2218c352acbc21a35-0649068e1e93ca-296e4933-370944-18c352acbc32c5e%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%22643d105cee39e30001732fdb.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%22643d105cee39e30001732fdb%22%7D%2C%22first_id%22%3A%2218c352acbc21a35-0649068e1e93ca-296e4933-370944-18c352acbc32c5e%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPxCAQhf_LnHuAQgvtcc0aTTQmG_fgyQAdsk0KbIAadbP_XWp13ZOXSeblzffgnSCoOR_uvQ3Q-3maKpgTxnU_gR4_b8KA0MPt3cPrI1SQZr25iC1nAyWNQWQdMkIIFay2gy6-crkL02La7F-2u6K4bPYLeihaozqrrZbINTHSSkME1VyK9fBiaxs-oDadEFQ2auHzMkgN5wrw_ThGfB5dyaCCtF1LJa95Lb8RT0eMKod_MbSkmYgq_1GoEOKXkj5SRrf-dG3GYTQH5fN1W-UZ1_kVvGFMY_DQs7VKr9wP4PwFAAD__w.gXk7Xi41YMCrjfflP_06hPjLkHPGLAmk2mo_WTSwKgAX7H2ueBntp2lUQNYZc7-TOq8B7xIVO5-A6ImWo-MP_lROfChW-3vIOX8J7rkVHBUHyd_y8e0G6bim9MNTBKjxBi13LsegRVL71IdjyY0d6WyZ98_prfy0_30ivmL5l-k; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9lzz7oN5J9TGlpoaUQmkNPRZJXxGBLQZZL25B3r4yS0FMvAg3zzc7uCaJZ8uEp-AhdWMaxgWXGVP8nsMPPXewROnh4fP54gQbmxW5v4kbwnhLpEHmLnBBCFWe-t8VXyF0cV9N2_36_K8qU3X6N7osmTeuttxqFJU577YiiVmhVwZttI0WP1rVKUS3Nmi_KQxicG8Cv45DwbZjwWryQr0dMJsd_aVqGuIQmX2CqSm2ltGCC6bLg95xxqgvW3AmTO5iQ_x6pTL-QWhLBGvjENA8xQMfrBYO5Fjv_AgAA__8.iYbxjm4c8Hcv89fy3TIxuzDgztfYeKMSeCqNd93rF7uCIcPTIwoFe0Fn5cMnwY5FDrvPl1MSvmlIdekPQwJMahpus_ZhkW-577nEKJiNuRFYR5Qv2cPTWoIyjQUUPhhGIYZ1jTIFcLXz-Trx47QW6daCCSdbLrNaqcUa9_r6W14; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701777851'
exports.Referer = `https://${urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`

//reservationConfigId 在local的 reserveId
exports.reservationConfigId = '656d66ee3630a500017e57ed'
// 时间信息
exports.saveTime = '2023-12-08 12:00-16:00'




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


