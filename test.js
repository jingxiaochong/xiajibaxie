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
            // "audienceCellphone": Math.random() >= 0.2 ? null : infores.data.phone,
            "seatInfo": "",
            "showOrderTicketItemId": ""
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
                "access-token": userInfo.token,
                //'Cookie': 'acw_sc__v3=667c22ce9cb5cd5fff80ec8ab190e5f97d8f589c' //滑块参数
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "channel-id": "",
                "content-type": "application/json;charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Android WebView\";v=\"122\"",
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": "\"Android\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "terminal-src": "WEIXIN_H5",
                "ver": "4.9.0",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "Hm_lvt_e2e961d5194c236ca2269b84361558fc=1717687621; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; acw_tc=0aef816617194934159286860e004d5b908b4c15d7647b2af5ce970725f307; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22654631bbf6deab0001b38657%22%2C%22%24device_id%22%3A%2218fee2915c385-0f7771c32dbbf7-66305735-364800-18fee2915c5242%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22WX%22%2C%22merchantDomain%22%3A%226437cab4291ee50001318391.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226437cab4291ee50001318391%22%7D%2C%22first_id%22%3A%2218fee2915c385-0f7771c32dbbf7-66305735-364800-18fee2915c5242%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzznEseOfHotAILVCquiBE_I6GzVSEleOg4Cq746DIeqJ445mv9mdC3g7x9PT2HrYjHPfFzBPFPJ8Aey-7nxDsIGHx93bHgqYZtyuohRcOYuiMoyoLsuScaa5YcmXNg--X0zb4-v9ISlDdMcF3SSttqbFFjUJLJ1utSsVQ6FVXlxtshaSM8RWNmRx4SPXslZwLYA-zl2gl25IGUxVQipVV1wI84N4PlOw0f-LkSnNBbJxpTAjDP-jTJ9TpCF_mpsZKLiTHeNtW-mM2_wC3ilMnR-TmKsc7fALuH4DAAD__w.Af7nSQNJy76FqwO3KQBhYB7HXyEwYHiK4JK1h1twpqG-U42lVePNEqlrTGwYjgrf6vbreH-SNDb21bKXVzENzP_xm5qPZJexvlrILHuZJVr6rxXteSkb5EtPnfrpYEIfA4vqGjff8tvMpfnQ5Lih_v9uEAGTwRMUE9hzyLW6KP0; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kE9Lw0AQxb_LnHPIZv_3WKkoKEKxB0-ys5nQQJItm42opd_dDWuLJ4_zeL838-YMwS3p-Dh1ATbTMgwVLDPFMp8B---70BJs4P7h6f0ZKpgX3N5EJbj2DkVjGZGs65pxZrhl2ZfJfRhW0_bwtttnZUz-sEa3WZPOdtihIYG1N53xtWYojC7gzaakUJwhdqolh2s-cqOkhksF9HnqI732I10Pz-TLiaJL4V9a5SU-kku_MNPMCstlw4WwueDXnGgsBUvuSNEf3ZT-PilvL6TU1ja8gg-Kcx-mLJYPTu562OUHAAD__w.KAKreMqEjfVhM51VwMikqwFdFciNGsBw1kimebV5mst1IupJrSkZzE9Y_ZC5m4L8ud-wGElgu7GOE8GXK6AstmGPbn7yxj-JnuXXJ0apN54DQ7huO6kXrTF-Z_uV-b1T05atGd_zUmx6uAmTh-8ZYcflT00ifU7YzeuSvZjy3qY; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1719493593; ssxmod_itna=eqAx9QKxgDuBDXYqBDCu728G8FDOjjBGFD02f4GXxbDZDiqAPGhDC4bI0eDKANzsB0qpfh=m0wvfPq/A+GbaZFA8ENmD74i8DCqi1D0qDYD4LQDgDQKQPiQxxiiDYq=GRS4B62DixDaDneDEQK4=A4DrZaOD0I8gxiki/qxflxxiBwIFxhxzfhPrrbYC745Flho8WrIjRqG/l2NsYD==; ssxmod_itna2=eqAx9QKxgDuBDXYqBDCu728G8FDOjjBGFD024GtG9DGxGXWG2Q58=FzkxFgwu8HwNI9aMFUxZ/PCBtNDFqG703BM+tqBnaDgDtWoDLp6QXU0E29NG99+f6nqUt9WLUT8TBwOTI9bYUPREPTQ0jPKBNdS8=xD; tfstk=fhHZcjgUd1iIYmh08yw4zGn-_tRT38LWoxabmmm0fP4gmr4h-q02DtVcsJXqPuz0o-Vg-JqTDGqimFe23cgZC-w_folEo2F_SStTotoqVfagGhUc3moS15DqDtrmmqKTlhdQBceYnUTS3LitXJXc5rkaiWjnvuCcINc22BwYnUTBMHURp-3W1xtD_DxUcojgmqqmxHr8q-XgiOfh-yE0nr00sJ23XlWGsPVmxQLxibCUf5xuuZBw-GQa9zmgSDqEKLNc6mUFntDu35UlFyWcnvrivv1eG9J4rb3ntfDHusUIgyFm82YlNPc-VJ4noN5KxRMig5k2k94mZg-CkkbvCxHvHsPgvkzWYHm-pq32ymhgjsCY6eEUPH4hMsFgvkzWYH5AM5F7Yzt3-",
                "Referer": "https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/personinfo",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            }
        }).then((res) => {
            // console.log(res.data);
            if (res.data.statusCode) {
                num += 1
                console.log(num);
            }
        }).catch(()=>{})
}