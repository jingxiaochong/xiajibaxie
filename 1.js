const axios = require('axios')


const url = 'https://6566d890783b53000119b89d.caiyicloud.com/cyy_gatewayapi/user/buyer/v3/identities/batch_auth?channelId=&terminalSrc=H5';

let data = {
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
axios.put(url, data, {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFrwzAMhf-LzjnIjZ3IOXZ0rNAxKOthp2EnMg0kcXGcsa30v89pRtfTjno8fU96Z_Bmisft4DxUw9R1GUwjh2U-g22_H3zDUMHj0-79GTIYJ7u-iYUqioY0lpRblSOiENqSbpIvbe59N5vWh7fNPil9rA8zukmaMtpZZ4mlxZoc1VgKK6lcFm-2xCcS7GQjbX7lSxYOV3DJgD9PbeDXtk8ZosRCEQo9e66IlxMHE_2_GJHS6sAm_lFEoVYlaokyffo1Ru6XT5dmeg710Qzxvq10xn1-Bh8cxtYPUNFS5WD6X8DlBwAA__8.cHdlgc-dcvColykl_oRWoJvEdZj6VZuB67MT6wjCMNA99_DGe-znhA2qh1o5DnQJKSFSvhGx8fBUpRvrCG4WCaYHhmbk_6RYMPDGdW29b194iKJldefQOOS9h6vfHF0zY3P9zveWosWNqU_Ll1IHoJRZhVHF2En8O3xgQ605GOA",
    "cache-control": "no-cache",
    "channel-id": "",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "putparamstoobject": "true",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "terminal-src": "H5",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238; ssxmod_itna2=eqIx9D0DBA0=qiKe0dD=wg0DROvQie=DceIExnKS7qeDsmaDLQQtYy77B+YyL2u563w4/qxxHD8gFX=YFzwo=A3=YToe8k+9dd=Pr5h1F6U7oiL2R2s5j/LRnXw+6x61TaUhF2BXy8En7bdS/MKG+kQSl8U+8jXGmTKomj01Sgvcl4rQP4+=Pf4Hm4rU3PQorQEIbaNeqZv0ipt6CknxHlWR0TRgGTf4xKde5ZcWuW6SUOmfnS5VbkU0W8ILKG8L58EOUd2LlKBkIx+xFRMY6bYuWy=UfK66aStBTmXgEjfOfNN8Zj5i7e8DhVEjElwHmjeaYq9fPUUygXSlw/6Ui=peg00A0hh2rEiU0rxFGSQpR=bVA2rF2zDh56U3mePSvvO08tDw=AkWEqU=if3CebhiDupQ4ltkhYf1pop2xaKG=Ag7QYCN/0TihpLpviGpPx5YjXPpegiXXR=P0dqo4jWA3G4DQ9DiD4taN+rsie1Nc=0k=U2KKxDFqD+hDxD=; ssxmod_itna=eqIhBKD5Y5DI1DAxBaCQ5DkFLCdqYTWFmxKKDsqDcQxA5D8D6DQeGTTRro=TG=GFcY2xW4oGobmKAC0CDLYAtQDefGASx84GIDeKG2DmeDyDi5GRD09meTDem=D5xGoDPxDeDAlKDCZaq=D7xNVDe=lB8D4xBE/iwjS0d4DCODDbxPgDB6=xBjD2LQ0ACNqqlRoYGEavidyFrP4KGhpYGeQRYhaR7pakDo8aYq4F++dSoOxD; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1699606246; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFrwzAMhf-LzjnIjZ3IOXZ0rNAxKOthp2EnMg0kcXGcsa30v89pRtfTjno8fU96Z_Bmisft4DxUw9R1GUwjh2U-g22_H3zDUMHj0-79GTIYJ7u-iYUqioY0lpRblSOiENqSbpIvbe59N5vWh7fNPil9rA8zukmaMtpZZ4mlxZoc1VgKK6lcFm-2xCcS7GQjbX7lSxYOV3DJgD9PbeDXtk8ZosRCEQo9e66IlxMHE_2_GJHS6sAm_lFEoVYlaokyffo1Ru6XT5dmeg710Qzxvq10xn1-Bh8cxtYPUNFS5WD6X8DlBwAA__8.cHdlgc-dcvColykl_oRWoJvEdZj6VZuB67MT6wjCMNA99_DGe-znhA2qh1o5DnQJKSFSvhGx8fBUpRvrCG4WCaYHhmbk_6RYMPDGdW29b194iKJldefQOOS9h6vfHF0zY3P9zveWosWNqU_Ll1IHoJRZhVHF2En8O3xgQ605GOA; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzzl4ceLYORYVgQRCquiBE7KTtRoptivHQUDVf8etofTEcUezb3bnAEEvaffgbYDOL9NUwTJTLPMBzPh1GwaCDu7uH9-eoIJ5MauLKBohBqlYK7lpOGMMURmphuzLm5swnUyr7et6kxWX-u0JPWSt0coaayTVhvXSyp61aGrZlsWLLfOlRLL1UBt-5teElt3AsQL62I-RXkaXM7BlopEMFVcKz4jnPUWdwr8YzGl9JJ3-KMiV-KXMn3MiVz4tzTiK_U77dN1WPuM6v4J3ivMYPHS8VOm1-wEcvwEAAP__.OUm1UWP9rxk2c_6CPnBsYV1fznSIgSuv-iVYx-5ytQ88DuCTjwJV9T09wkbbezyl9hQR37_h-eYmyALv7hI-b9k7sW4yKTNz8mevkccrwBYUYTq-pIf6g6oJxV0WTN6shO84Ecl_rRlH1ZC4QcvpNt8wHBD-yL3HiHPrXpjj0b0; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656d8e59b5b63a000140d8d4%22%2C%22%24device_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiYjg2ZDY0NGQxMDdhLTA1NGIwNmQwMDdkZGJhLTE2NTI1NjM0LTEyOTYwMDAtMThiYjg2ZDY0NGUxMDZlIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjU2ODgxZWY0ZDRiMzMwMDAxNGUxZjAyIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22656881ef4d4b3300014e1f02%22%7D%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238,1701681243; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701681243",
    "Referer": "https://6566d890783b53000119b89d.caiyicloud.com/reserve/reserve-detail/personinfo",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
})
  .then(response => {
    // console.log(response.data);
  })
  .catch(error => {
    // console.log(456);
  });

let url1 = 'https://6566d890783b53000119b89d.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5'
let data1 = {
  "reservationConfigId": "656837b0a70d2d00015d27f1",
  "reservationDate": 1701446400000,
  "startTime": "19:30",
  "endTime": "21:30",
  "showOrderId": "",
  "showSessionId": "",
  "reservationAudienceParams": [
    {
      "audienceCellphone": null,
      "audienceIdentityNumber": "411121199808210015",
      "audienceIdentityType": "ID_CARD",
      "audienceName": "井晓冲",
      "seatInfo": "",
      "showOrderTicketItemId": ""
    }
  ],
  "src": "H5"
}
axios.post(url1, data1,
  {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFrwzAMhf-LzjnIjZ3IOXZ0rNAxKOthp2EnMg0kcXGcsa30v89pRtfTjno8fU96Z_Bmisft4DxUw9R1GUwjh2U-g22_H3zDUMHj0-79GTIYJ7u-iYUqioY0lpRblSOiENqSbpIvbe59N5vWh7fNPil9rA8zukmaMtpZZ4mlxZoc1VgKK6lcFm-2xCcS7GQjbX7lSxYOV3DJgD9PbeDXtk8ZosRCEQo9e66IlxMHE_2_GJHS6sAm_lFEoVYlaokyffo1Ru6XT5dmeg710Qzxvq10xn1-Bh8cxtYPUNFS5WD6X8DlBwAA__8.cHdlgc-dcvColykl_oRWoJvEdZj6VZuB67MT6wjCMNA99_DGe-znhA2qh1o5DnQJKSFSvhGx8fBUpRvrCG4WCaYHhmbk_6RYMPDGdW29b194iKJldefQOOS9h6vfHF0zY3P9zveWosWNqU_Ll1IHoJRZhVHF2En8O3xgQ605GOA",
      "cache-control": "no-cache",
      "channel-id": "",
      "content-type": "application/json;charset=UTF-8",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "terminal-src": "H5",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238; ssxmod_itna2=eqIx9D0DBA0=qiKe0dD=wg0DROvQie=DceIExnKS7qeDsmaDLQQtYy77B+YyL2u563w4/qxxHD8gFX=YFzwo=A3=YToe8k+9dd=Pr5h1F6U7oiL2R2s5j/LRnXw+6x61TaUhF2BXy8En7bdS/MKG+kQSl8U+8jXGmTKomj01Sgvcl4rQP4+=Pf4Hm4rU3PQorQEIbaNeqZv0ipt6CknxHlWR0TRgGTf4xKde5ZcWuW6SUOmfnS5VbkU0W8ILKG8L58EOUd2LlKBkIx+xFRMY6bYuWy=UfK66aStBTmXgEjfOfNN8Zj5i7e8DhVEjElwHmjeaYq9fPUUygXSlw/6Ui=peg00A0hh2rEiU0rxFGSQpR=bVA2rF2zDh56U3mePSvvO08tDw=AkWEqU=if3CebhiDupQ4ltkhYf1pop2xaKG=Ag7QYCN/0TihpLpviGpPx5YjXPpegiXXR=P0dqo4jWA3G4DQ9DiD4taN+rsie1Nc=0k=U2KKxDFqD+hDxD=; ssxmod_itna=eqIhBKD5Y5DI1DAxBaCQ5DkFLCdqYTWFmxKKDsqDcQxA5D8D6DQeGTTRro=TG=GFcY2xW4oGobmKAC0CDLYAtQDefGASx84GIDeKG2DmeDyDi5GRD09meTDem=D5xGoDPxDeDAlKDCZaq=D7xNVDe=lB8D4xBE/iwjS0d4DCODDbxPgDB6=xBjD2LQ0ACNqqlRoYGEavidyFrP4KGhpYGeQRYhaR7pakDo8aYq4F++dSoOxD; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1699606246; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFrwzAMhf-LzjnIjZ3IOXZ0rNAxKOthp2EnMg0kcXGcsa30v89pRtfTjno8fU96Z_Bmisft4DxUw9R1GUwjh2U-g22_H3zDUMHj0-79GTIYJ7u-iYUqioY0lpRblSOiENqSbpIvbe59N5vWh7fNPil9rA8zukmaMtpZZ4mlxZoc1VgKK6lcFm-2xCcS7GQjbX7lSxYOV3DJgD9PbeDXtk8ZosRCEQo9e66IlxMHE_2_GJHS6sAm_lFEoVYlaokyffo1Ru6XT5dmeg710Qzxvq10xn1-Bh8cxtYPUNFS5WD6X8DlBwAA__8.cHdlgc-dcvColykl_oRWoJvEdZj6VZuB67MT6wjCMNA99_DGe-znhA2qh1o5DnQJKSFSvhGx8fBUpRvrCG4WCaYHhmbk_6RYMPDGdW29b194iKJldefQOOS9h6vfHF0zY3P9zveWosWNqU_Ll1IHoJRZhVHF2En8O3xgQ605GOA; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzzl4ceLYORYVgQRCquiBE7KTtRoptivHQUDVf8etofTEcUezb3bnAEEvaffgbYDOL9NUwTJTLPMBzPh1GwaCDu7uH9-eoIJ5MauLKBohBqlYK7lpOGMMURmphuzLm5swnUyr7et6kxWX-u0JPWSt0coaayTVhvXSyp61aGrZlsWLLfOlRLL1UBt-5teElt3AsQL62I-RXkaXM7BlopEMFVcKz4jnPUWdwr8YzGl9JJ3-KMiV-KXMn3MiVz4tzTiK_U77dN1WPuM6v4J3ivMYPHS8VOm1-wEcvwEAAP__.OUm1UWP9rxk2c_6CPnBsYV1fznSIgSuv-iVYx-5ytQ88DuCTjwJV9T09wkbbezyl9hQR37_h-eYmyALv7hI-b9k7sW4yKTNz8mevkccrwBYUYTq-pIf6g6oJxV0WTN6shO84Ecl_rRlH1ZC4QcvpNt8wHBD-yL3HiHPrXpjj0b0; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656d8e59b5b63a000140d8d4%22%2C%22%24device_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218bb6dd3e71139e-086df4e7fe9111-16525634-1296000-18bb6dd3e7220d1%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThiYjg2ZDY0NGQxMDdhLTA1NGIwNmQwMDdkZGJhLTE2NTI1NjM0LTEyOTYwMDAtMThiYjg2ZDY0NGUxMDZlIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjU2ODgxZWY0ZDRiMzMwMDAxNGUxZjAyIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22656881ef4d4b3300014e1f02%22%7D%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1699606238,1701681243; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1701681243",
      "Referer": "https://6566d890783b53000119b89d.caiyicloud.com/reserve/reserve-detail/personinfo",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });

