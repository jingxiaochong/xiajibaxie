// access-token 为 consistent_code
// function getCookie(cookieName) {
//     const strCookie = document.cookie
//     const cookieList = strCookie.split(';')
    
//     for(let i = 0; i < cookieList.length; i++) {
//       const arr = cookieList[i].split('=')
//       if (cookieName === arr[0].trim()) {
//         return arr[1]
//       }
//     }
    
//     return ''
//   }
//   getCookie('consistent_code')

// cookie 为 doc.cookie

exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzznYjR2vcywqAgmEVNEDJ2QnazVSYleOg4Cq_46L24oTxx3Nm93ZIwSzpP2jdwFav4xjBctMscxHsMP3XegJWrh_eHp_hgrmxa5vYiObpkfNFNZW1owxzrVF3WdfJrdhPJvWu7fNNitT6nbn6D5r0mhnnUUSlnXosGOKW4GqgDdbzkfk5EQvbP2bL4g7toJTBfR5GCK9DhNdD8_ky4GiSeFfmuclXSSTLjBXnMlGIGouZC74NSeaSsGSO1Hs9sanv0_K2y-kWjHUFXxQnIfgodXlg95cDzv9AAAA__8.iYriqA5mwMfKHin6ymHS9j7zV2IrLhxOhLyC0aYq1xgA7gHN8iVI9qNv-5Gf3MLPzcm49ri2yYVQ6PjKbF8Vh6vECAB28lOdhnhCFkb6MEvnHerBviTu-zKYeiGSq74x6xXZvqrSG7cgDebRParBAyM_Opqh3Yug6rxtQjCoGBs'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1710564860; sajssdk_2015_cross_new_user=1; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=FOLLOW_SYSTEM; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22656881ef4d4b3300014e1f02%22%2C%22%24device_id%22%3A%2218e459c617e3e3-075c5c92ca1bbf-296e4933-400760-18e459c617f12f7%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218e459c617e3e3-075c5c92ca1bbf-296e4933-400760-18e459c617f12f7%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzznYxI7XORYVgQRCquiBE7KTtRopiSvbQUDVf8etofTEcUezb3bnAN4safcwOw_tvIxjBUukUOYD2OHr1vcELdzdP749QQVxsauL2Mim6VEzhbWVNWOMc21R99mXNzd-PJlW29f1JitT6rYndJ81abSzziIJyzp02DHFrUBVFi-2zEfk5EQvbH3mC-KO3cCxAvrYD4FehilncMWlEoiouZBnxPOegkn-XwzPaV0gk_4oTDbilxI_Y6KpfFqamSh0OzOn67byGdf5FbxTiIOfodWlytlMP4DjNwAAAP__.Jpa7aVismeTuB88ev5n1zMbKOh53BCYKLbxIkobs-zHCxK1FHw8TaLa98GIt7hrGci7rULDRXKT-qLFMd-W_67CceAMvySF_kAFQlYJEKAAV4PPm5L8p4SM5o-YEDHkOJx-tm7aDuNP7fAQKhPrAl5E1yXMfsf1Qoej2_zi5124; user_cellphone=155****2921; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kMFOwzAQRP9lzznYjR2vcywqAgmEVNEDJ2QnazVSYleOg4Cq_46L24oTxx3Nm93ZIwSzpP2jdwFav4xjBctMscxHsMP3XegJWrh_eHp_hgrmxa5vYiObpkfNFNZW1owxzrVF3WdfJrdhPJvWu7fNNitT6nbn6D5r0mhnnUUSlnXosGOKW4GqgDdbzkfk5EQvbP2bL4g7toJTBfR5GCK9DhNdD8_ky4GiSeFfmuclXSSTLjBXnMlGIGouZC74NSeaSsGSO1Hs9sanv0_K2y-kWjHUFXxQnIfgodXlg95cDzv9AAAA__8.iYriqA5mwMfKHin6ymHS9j7zV2IrLhxOhLyC0aYq1xgA7gHN8iVI9qNv-5Gf3MLPzcm49ri2yYVQ6PjKbF8Vh6vECAB28lOdhnhCFkb6MEvnHerBviTu-zKYeiGSq74x6xXZvqrSG7cgDebRParBAyM_Opqh3Yug6rxtQjCoGBs; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1710564894'


exports.postData = {
    "audienceCellphone": null,
    "audienceIdentityNumber": "411121199808210015",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "井晓冲",
    "audienceCellphone":"15539502921",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}


