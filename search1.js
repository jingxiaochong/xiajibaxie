const axios = require('axios')
const public = require('./public.js')

axios.get('http://116.62.122.121:4396/getInfo').then((res) => {
    userInfo = {
        token: res.data.access_token, info: {
            "audienceIdentityNumber": res.data.card_id,
            "audienceIdentityType": "ID_CARD",
            "audienceName": res.data.user,
            "audienceCellphone": res.data.phone,
            "seatInfo": "",
            "showOrderTicketItemId": ""
        }
    }
})

setTimeout(() => {
    console.log(userInfo);
    console.log(public);
    postFunction()
}, 1000);

start()
function start() {
    let date = new Date()
    if (date.getHours() == 13 && date.getMinutes() == 59 && date.getSeconds() == 50) {
        search()
    } else {
        setTimeout(() => {
            start()
        }, 1);
    }
}

function search() {
    axios.get(public.searchURl, {
        "headers": {
            "access-token": userInfo.token,
        }
    }).then(res => {
        if (res.data.data.reservationDates[0].configItems[0].isOnsale) {
            postFunction()
        } else {
            setTimeout(() => {
                search()
            }, 500);
        }
    })
}
// 

function postFunction() {
    let data1 = {
        "identityAuthRequests": [
            {
                "idType": "ID_CARD",
                "idTypeName": "身份证",
                "idNo": userInfo.info.audienceIdentityNumber,
                "name": userInfo.info.audienceName
            }
        ],
        "src": "H5"
    }
    axios.put(`https://${public.urlBase}.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5`, data1, {
        "headers": {
            "access-token": userInfo.token,
        }
    }).then((res) => {
        console.log(res.data);
        // return
        let data = {
            "reservationConfigId": public.reservationConfigId,
            "reservationDate": public.saveTime.data,
            "startTime": public.saveTime.startTime,
            "endTime": public.saveTime.endTime,
            "showOrderId": "",
            "showSessionId": "",
            "reservationAudienceParams": [userInfo.info],
            "src": "H5"
        }
        axios.post(public.postUrl, data,
            {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "zh-CN,zh;q=0.9",
                    "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzl44zhOeiwCgQRCquiBE_LPRo2U2JXjIKDqu2PLLeqJ447m29nZE3i1xsOTGzxs3DpNFawLhTKfQI8_d94SbODh8fnjBSpYVr39E9uGS6N0U_dIJBhjyLHjPSZfInd-yqbt_v1-l5Q5mn1ebTPY4qA1StK2kzKDxtaDYAW8sdXYMOKM9VZStmnVDdjAuQL6Oo6B3saZrocn8vVIQUX_L81TiAmk4gVGibwRgnOUTKSC30ukuRQse2cK5qBcvH1SSr-QbS04VvBJYRm9S2L5oFPXw86_AAAA__8.VHyWJVja1ArzD5sP8KWmCwMKY9wKYU8BetxLNunbgXXcp8xAxuegUxxoaA6LX65kzfxMs1Eba_TwR3Z2V-ODG1nZnCm--KYJ4ULRJModDctiH9NVuyLYsmyjaJ2QUvZYRw1DJcmtXSveLSymqHWwSCPnoEtW59uY20DwFNu2Ryg",
                    "channel-id": "",
                    "content-type": "application/json;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "terminal-src": "H5",
                    "x-requested-with": "XMLHttpRequest",
                    "cookie": "acw_tc=2f624a5417134554248421709e7e0b8ced31a0a15370f2b99879d6e1c3c4b5; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1713455426; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzl44zhOeiwCgQRCquiBE_LPRo2U2JXjIKDqu2PLLeqJ447m29nZE3i1xsOTGzxs3DpNFawLhTKfQI8_d94SbODh8fnjBSpYVr39E9uGS6N0U_dIJBhjyLHjPSZfInd-yqbt_v1-l5Q5mn1ebTPY4qA1StK2kzKDxtaDYAW8sdXYMOKM9VZStmnVDdjAuQL6Oo6B3saZrocn8vVIQUX_L81TiAmk4gVGibwRgnOUTKSC30ukuRQse2cK5qBcvH1SSr-QbS04VvBJYRm9S2L5oFPXw86_AAAA__8.VHyWJVja1ArzD5sP8KWmCwMKY9wKYU8BetxLNunbgXXcp8xAxuegUxxoaA6LX65kzfxMs1Eba_TwR3Z2V-ODG1nZnCm--KYJ4ULRJModDctiH9NVuyLYsmyjaJ2QUvZYRw1DJcmtXSveLSymqHWwSCPnoEtW59uY20DwFNu2Ryg; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218ef1e6eb4b64e-07906604bacd2e-296e4933-370944-18ef1e6eb4c1aaa%22%2C%22%24device_id%22%3A%2218ef1e6eb4b64e-07906604bacd2e-296e4933-370944-18ef1e6eb4c1aaa%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226437cab4291ee50001318391.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226437cab4291ee50001318391%22%7D%7D; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1713455443",
                    "Referer": "https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/personinfo",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                }
            }).then((res) => {
                console.log(res.data);
                if (res.data.statusCode == 200 && res.data.data.id) {
                    axios.post('http://116.62.122.121:4396/putUserInfo', {
                        data: {
                            token: userInfo.token,
                            id: res.data.data.id
                        }
                    })
                } else {
                    setTimeout(() => {
                        postFunction()
                    }, 1000);
                }
            }).catch((err) => {
                console.log(err);
            });
    })

}