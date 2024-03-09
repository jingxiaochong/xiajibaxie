// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzmsyY_XORYVgQRCquiBE7KdtRopiSvHQUDVd8fFpOLEcUfzze7sCbxe4uFhch7aaRmGApaZQ55PYPqvW98xtHB3__j2BAXMi9lcxaZumo4USipNXSKiEMqQ6pIvkTs_XEyb_et2l5Qx2v0luktarZUzzhBXBi05siiFqUhm8GpL-USCXdVVpvzJr1g4vIFzAfxx7AO_9COvhyfy-chBR_8vLdISG1jHX1hIVKrBGkkRpoKfc-QxF8y5Iwd70FP8-6S0fSWlRCrgncPc-wnaOn9w0uth528AAAD__w.StLiVrUHK4Y_8kjQ3xM75K6MQt_otlogM_KR3-uSNeS0c25F1JW9tXnTdNyeeWlQp60qZyTjd41STVztJWf4Fw365f_SJypzASZo5UkLu-6kbCdhKp9Yl5mvf16gmGTMsCk-rixFZgTy3t8KQoeVbT_miyCV4ULvBFfjOAEwbBU'
exports.Cookie = 'user_cellphone=155****2921; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%7D; Hm_lvt_e2e961d5194c236ca2269b84361558fc=1709703851,1709907375,1709960477; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEFPwzAMhf-Lzz04NGmdHodAIIGQJnbghJLW0So1zZSmCJj238lWqHbi6Kfn79nvCMHMaf84ugDNOA9DAfPEcZmPYPvv29AxNHD_8PT-DAVMs92sYqWqqiONNZVWlYgohLaku-zLm9swnE2b3dvdNis-tbszusuaMtpZZ4mlxZYctVgLK6leFldb5hMJdrKTtrzwJQuHN3AqgD8PfeTX3ucMUQslpFRImvCCeDlwNCn8ixE5rY1s0kpBrSv8o0xfU2K_fLo04zm2ezOm67byGdf5BXxwnPowQqOWKkfjfwGnHwAAAP__.XUQ3fWin_XsUfJJGSPzpLoMzFNA8sG8148NwOlxZXnlza0ceXLCc9inmQtdWl-rofH28I7h7U6yDET8c5Hchxti8vIOEZmZEyeSkBqi5YxRF2tJGP5SEieCuu-KdyVYAYRyCSpKTDK4tcnTCIVP-7vSsLRZoFcayS3iAZJHXLxI; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kM1OwzAQhN9lzzmsyY_XORYVgQRCquiBE7KdtRopiSvHQUDVd8fFpOLEcUfzze7sCbxe4uFhch7aaRmGApaZQ55PYPqvW98xtHB3__j2BAXMi9lcxaZumo4USipNXSKiEMqQ6pIvkTs_XEyb_et2l5Qx2v0luktarZUzzhBXBi05siiFqUhm8GpL-USCXdVVpvzJr1g4vIFzAfxx7AO_9COvhyfy-chBR_8vLdISG1jHX1hIVKrBGkkRpoKfc-QxF8y5Iwd70FP8-6S0fSWlRCrgncPc-wnaOn9w0uth528AAAD__w.StLiVrUHK4Y_8kjQ3xM75K6MQt_otlogM_KR3-uSNeS0c25F1JW9tXnTdNyeeWlQp60qZyTjd41STVztJWf4Fw365f_SJypzASZo5UkLu-6kbCdhKp9Yl5mvf16gmGTMsCk-rixFZgTy3t8KQoeVbT_miyCV4ULvBFfjOAEwbBU; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1709960515'


exports.postData = {
    "audienceCellphone": null,
    "audienceIdentityNumber": "411121199808210015",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "井晓冲",
    "audienceCellphone":"15539502921",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}


