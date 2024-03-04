const public = require('./public.js')
//活动域名前缀
urlBase = public.urlBase
reservationConfigId = public.reservationConfigId

// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9lzz5IkSzLOaa0tJBQCM2hp6KVV8RgW0GWS9uQd-8aJ6Gnak8a5pv9OUN0Uz6-DCHCepi6roBppLT8z4Dtz0NsCNbw9Lz92EEB44Sbu2i0qrxDvaolUSmEkEpaVUv2MbmP3WzaHN4f96z02R_m6Ia10tUBA1rSKLwN1otKorbVAt5tptRGScRgGnI456OypqzgUgB9ndpEb21Pt8GZfD1Rcjn-Sxtu4hO5fIVlJepScfHTvOD3mKlfFlxye0r-6Ib890jc_UrqFXMFfFIa2ziwuFxwcLfBLr8AAAD__w.GWI6E9OXDdePeYfjHE9rUSX-_RuaniHvMLRzsNnyTETZt86hSN4zanJnHbd8wMcFFY_UG6XGUhlcE3yWGkviD5l6AXGBlk56wTlsNP-So_haGdOU5rV5nwiiMAFw-QU-7RTdknGM_ragBc9uk3xMOuKAb4JoQAvs_YWJP7XLr4s'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1709535327; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22654631bbf6deab0001b38657%22%2C%22%24device_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226437cab4291ee50001318391.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226437cab4291ee50001318391%22%7D%2C%22first_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznY-Dc9FhWBBEKq6IET8jprNVISV46DgKrvjkMg6om97Wj2G3vOEN2Ujw9DiLAZpq6rYBopLfsZsP26jQ3BBu7uH9-eoIJxwu0qaimMdyhvak6kGGNccCtqXnzlch-72bQ9vO72RemzP8zopmjK1QEDWpLIvA3WM8NRWrMcrjatpBYcMeiGHM58FFYrA5cK6OPUJnpp-5LBDZeG10KVkT-I5xMll-O_GF3SfCKXVwqrlVB_lPFzzNQvP12a6Sn5oxvydVvlGdf5FbxTGts4FHGpcnD9L-DyDQAA__8.M4-az-uKr2s9zjSKOnskTU5srYNMM17droo5Heli6j-CmvxcOgmLnw5cH0O2Rjn9dC-BpQwmxN1s8x-AWxBNeIjC71W4f6-UotXavFRQgBTPtCUxOvvtUllpuLzgtdrRvp_Sw5w9yDKu5VWad9fFPrrWru9RwuZWp3EyDqWasMQ; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1qwzAQhN9lzz5IkSzLOaa0tJBQCM2hp6KVV8RgW0GWS9uQd-8aJ6Gnak8a5pv9OUN0Uz6-DCHCepi6roBppLT8z4Dtz0NsCNbw9Lz92EEB44Sbu2i0qrxDvaolUSmEkEpaVUv2MbmP3WzaHN4f96z02R_m6Ia10tUBA1rSKLwN1otKorbVAt5tptRGScRgGnI456OypqzgUgB9ndpEb21Pt8GZfD1Rcjn-Sxtu4hO5fIVlJepScfHTvOD3mKlfFlxye0r-6Ib890jc_UrqFXMFfFIa2ziwuFxwcLfBLr8AAAD__w.GWI6E9OXDdePeYfjHE9rUSX-_RuaniHvMLRzsNnyTETZt86hSN4zanJnHbd8wMcFFY_UG6XGUhlcE3yWGkviD5l6AXGBlk56wTlsNP-So_haGdOU5rV5nwiiMAFw-QU-7RTdknGM_ragBc9uk3xMOuKAb4JoQAvs_YWJP7XLr4s; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1709535360'




exports.Referer = `https://${urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`
exports.searchURl = `https://${urlBase}.caiyicloud.com//cyy_buyerapi/buyer/cyy/v1/reservation_configs/${reservationConfigId}/instance`



exports.postUrl = `https://${urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
exports.postData = {
    "audienceCellphone": null,
    "audienceIdentityNumber": "411121199808210015",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "井晓冲",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}


