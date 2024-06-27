const axios = require('axios')
let public = {}

let userInfo = {}
axios.get('http://116.62.122.121:4396/getInfo?type=1').then((infores) => {
    console.log(infores.data.user);
    userInfo = {
        token: infores.data.refresh_token,
        info: [{
            "audienceIdentityNumber": infores.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": infores.data.user,
            "seatInfo": "",
            "showOrderTicketItemId": "",
            audienceCellphone: null,
        }]
    }

    public.searchURl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${infores.data.active_id}/instance`
    public.postUrl = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=WEIXIN_H5`
    public.searchOrder = `https://${infores.data.base_url}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders/id?channelId=&terminalSrc=WEIXIN_H5`
    public.reservationConfigId = infores.data.active_id
    axios.get(public.searchURl, {
        "headers": {
            "access-token": userInfo.token,
        }
    }).then(res => {
        public.saveTime = {
            date: res.data.data.reservationDates[0].reservationDate,
            startTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].startTime,
            endTime: res.data.data.reservationDates[0].configItems[0].configTimeItems[0].endTime,
        }
        setInterval(() => {
            postFunction()    
        }, 500);
    })
})

// start()
// function start() {
//     let date = new Date()
//     const options = {
//         timeZone: 'Asia/Shanghai',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false
//     };
//     const formatter = new Intl.DateTimeFormat('en-US', options);
//     const parts = formatter.formatToParts(date);
//     let hour, minute, second;
//     for (const part of parts) {
//         if (part.type === 'hour') hour = part.value;
//         if (part.type === 'minute') minute = part.value;
//         if (part.type === 'second') second = part.value;
//     }
//     if (hour == 13 && minute == 59 && second == 58) {
//         setInterval(() => {
//             search()
//         }, 100);
//         setTimeout(() => {
//             process.exit(0)
//         }, 90000);
//     } else {
//         setTimeout(() => {
//             start()
//         }, 1);
//     }
// }

// function search() {
//     axios.get(public.searchURl, {
//         "headers": {
//             "access-token": userInfo.token,
//         }
//     }).then(res => {
//         if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
//             postFunction()
//         }
//     })
// }
let num = 0
function postFunction() {
    let data = {
        "reservationConfigId": public.reservationConfigId,
        "reservationDate": public.saveTime.date,
        "startTime": public.saveTime.startTime,
        "endTime": public.saveTime.endTime,
        "showOrderId": "",
        "showSessionId": "",
        "reservationAudienceParams": userInfo.info,
        "src": "H5"
    }
    axios.post(public.postUrl, data,
        {
            "headers": {
                // "access-token": userInfo.token,
                //'Cookie': 'acw_sc__v3=667c22ce9cb5cd5fff80ec8ab190e5f97d8f589c' //滑块参数
                'Accept': 'application/json, text/plain, */*',
'Accept-Encoding': 'gzip, deflate, br, zstd',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Cache-Control': 'no-cache',
'Connection': 'keep-alive',
'Content-Length': '371',
'Content-Type': 'application/json;charset=UTF-8',
'Cookie': 'consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFOwzAQRP9lzzlk7U2c9lgEAgmEVNEDJ-QkWzVSbFeOg4Cq_84Go6onOHo088Y7Jwh2TocHvw-w9vM4FjBPHPP7BO3wdRN6hjXc3T--PUEB09xuLmJN2nS2JbVC5qosS9TY6BWKT5LbMC6mze71diuKS91uQfdLsK5tpU2LpJn2SxBtj1WVg__ZDJwL4I_jEPllcNKBRmlSjVJiKX8Qz0eONoU_MbW0dZFtulCwUURkUBPKpZ9TYpcvzcs4jt3B-nS9lnzjur-Ad47TELyIeUpv3S_g_A0AAP__.Jdk0VmlHR6Hx4c7r6lTdTmPmDqE55lYazwEihnZ3OBxpJlkxt5FX5laRyGPPT29Lk_yMJ6FwF1YanmDbkeO4eRuLNr9_b23xfKVRdaQcS6n6xYOEe3FbF3r86hVh4BaLWjAhH5qb40GBXl5wmdIgXXI_6C4JGhtGJAKDsijVsi8; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219054d23492ee-03501c3f2a40e8-26001f51-3686400-19054d234933024%22%2C%22%24device_id%22%3A%2219054d23492ee-03501c3f2a40e8-26001f51-3686400-19054d234933024%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226437cab4291ee50001318391.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226437cab4291ee50001318391%22%7D%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1718812210,1718975516,1719408520,1719491003; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; acw_tc=2f624a2f17194971805328515e36209b806d7aa8a929ae7cca4d6d3aefb42d; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1719497647; ssxmod_itna=euDtDIxjOGCG83DXDnQmq0=t8dLADkAmDIxiKQD/KzmDnqD=GFDK40oEO3eEuwTNtWYw3hplZi2xFWA0n4PaP8AiPuqamDB3DEx0=WIbxYAkDt4DTD34DYDihQGIDieDF8NvzkDbxYQDYqGRDB6XSqDj8ThQef=exG3BtDDltBRqRAeSD0YDbE=SS4DgeeG2DGU=oA=DjqGgDBL5+ZG9DDtOEZDlAkcxlWpuYmiDtqD9ej=DbSdTx0PBnuTsmSebRSmozGpbQ7mq3xes8xmxtOEj3EG4WGhtRAxQIV+qmdLxR/exD===; ssxmod_itna2=euDtDIxjOGCG83DXDnQmq0=t8dLADkAmDIxiKDSD8MDGXWG2tNdKCNDFOGSQVWht89C=7HXsxy=Bp0Q4sA7yEPO3Ij2XAMtnl5hCp8ALm4+KE8WjUKv0ZM0w0=Q/7DfLv+NyBGTWzqAQREGi9Ee23oNPKjiEY7DDFqD284PPCwG43ih+ALDy+ThtNAiNxnDCQATV3AxbEA5aNYTIf6oz+6ATKLEQDfY5Gpv+Q6WWkADxD===; tfstk=fzAtYEDafDmitBvDKFMHovf_0_0nEILw8h87iijghHKdyaN_fckNHw_AWN9i7NTBRZ7Y1NNffX1CvnuwSRvGDqKByIXjb1AvvEK8sdXcoSKpk3FMItb0MBCwtdVcjc5vl3fxq0coZF8N0sioq3wPSeC5o-Z_mS_QdN1GarloZF86DudeQb02Giwfci1fCt6COM7uhss1l2ICkaybfn1jJesFkRNffO_BRa7rs1gOYP_TMKBPoPVsVqP0iBQI2GTOfw7J9NBOE9sLGwAdWOIWWCoMrU_BtBBlKrmAOUJHfwC-MW1OedtOReoYwG9kzUjfQzPDJnddOC98lSTd6MXPRhrtvgOwRQ5CKbgJRB-M7BL0lj_HqMTw1shSz1C1f6QeiDP1Dp9XsO54fcCXJZszPQA8NPZl2Z2sJ2e43O_3IXuWz4fUDSbdqV6_3-Wc8wIoJ2e43O_FJg0_1-yVnw5..',
'Host': '6437cab4291ee50001318391.caiyicloud.com',
'Origin': 'https://6437cab4291ee50001318391.caiyicloud.com',
'Pragma': 'no-cache',
'Referer': 'https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/personinfo',
'Sec-Fetch-Dest': 'empty',
'Sec-Fetch-Mode': 'cors',
'Sec-Fetch-Site': 'same-origin',
'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
'X-Requested-With': 'XMLHttpRequest',
'access-token': 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFOwzAQRP9lzzlk7U2c9lgEAgmEVNEDJ-QkWzVSbFeOg4Cq_84Go6onOHo088Y7Jwh2TocHvw-w9vM4FjBPHPP7BO3wdRN6hjXc3T--PUEB09xuLmJN2nS2JbVC5qosS9TY6BWKT5LbMC6mze71diuKS91uQfdLsK5tpU2LpJn2SxBtj1WVg__ZDJwL4I_jEPllcNKBRmlSjVJiKX8Qz0eONoU_MbW0dZFtulCwUURkUBPKpZ9TYpcvzcs4jt3B-nS9lnzjur-Ad47TELyIeUpv3S_g_A0AAP__.Jdk0VmlHR6Hx4c7r6lTdTmPmDqE55lYazwEihnZ3OBxpJlkxt5FX5laRyGPPT29Lk_yMJ6FwF1YanmDbkeO4eRuLNr9_b23xfKVRdaQcS6n6xYOEe3FbF3r86hVh4BaLWjAhH5qb40GBXl5wmdIgXXI_6C4JGhtGJAKDsijVsi8',
'channel-id': '',
'terminal-src': 'H5',

            }
        }).then((res) => {
            // console.log(res.data);
            if (res.data.statusCode) {
                num += 1
                console.log(num);
            }
        }).catch(()=>{})
}