// access-token 为 consistent_code
// cookie 为 doc.cookie
//Referer 为链接前缀
exports.AccessToken = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFugzAQRP9lzxxstmDgmKpVKyWqhMqhp8qGRSCBjYyp2kb595qaRDklxx3N29nZIxi5uO5VtwYKvQxDBMtMNsxHUP3vo2kICnh-2X8eIIJ5UbuLmCZp2mQ5ExmqBBljnOcqyxvv82RphtW0qz6eSq-Mrq7W1c0_KLBltZAKFY9XEAVhTAG8Y0MGpwjoe-otvfcjnQ_35NtEVjpzM6T1IbUl6TaYC86S9MGbE5b5gj-zozEUDHtHsnUntbt-kk_fSMGFwAi-yM690VBg-KCW58NOfwAAAP__.YKJgfkY4o7Ec9k9tfNoOWx0YHS7b4XMzQdy23XHuJ2QdHqBGqn2oY_Q3LB8C5gKD5_wqowNK_f0RZYChspOQY5YULsAvTNudJq5i8yoZ13jcz6QnLlY08aOc78ry2JE1nuYOzFxA2NiwM8Y0t61FXzTc-jMY04zPOdaYsdzGDEI'
exports.Cookie = 'Hm_lvt_e2e961d5194c236ca2269b84361558fc=1709703851,1709907375,1709960477,1710511607; shopPriceColor=FB5200; shopNavTextColor=FB5200; shopColor=FB5200; userTheme=LIGHT_MODE; currentThemeType=LIGHT_MODE; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%226573f0c7ab3b12000137e330%22%2C%22%24device_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22platform%22%3A%22H5%22%2C%22merchantDomain%22%3A%226566d890783b53000119b89d.caiyicloud.com%22%2C%22product%22%3A%22CYY%22%2C%22merchantId%22%3A%226566d890783b53000119b89d%22%7D%2C%22first_id%22%3A%2218c42c8a517f98-0b5d56856c140d-296e4933-400760-18c42c8a51827ce%22%7D; refresh_token=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkEtrwzAQhP_Lnn2QosiyfXRJaKGlEJJDT0Wy19hgSUGSSx7kv1e2-sipPe4y883uXMHKKfRPprNQmWkcM5g8ujRfQQ2XB9siVLB9fH5_gQz8pOqfZc7zvC1KIgqmOCOEUFqqomyjLjp3dpxF9eFts4sbHZrDjG4Xo2AdaYRUTNHVbGQC2QqT8R8ZI3DLAE_HweF-0DGDCsrFuohqTsoF8XpEJ4P9M62LaY1DGX4phOfrb4o_-4A6fZqa0eiaXppw31Y84z4_gw90frAGKpaqNFJ_AW6fAAAA__8.apseOnXjjo-xRfVpQFELPMFrDclR9YRXmWEdAyeS2osdAhrTGzQzlhcvs6XOye3unk5KoWin8AB86IJ6S5YX4Z0K3BaN49NUaV0WyYv_kPfg3MtqnJ-xwQ6ohz9RNwEhKGe19MMAxLMFmeMNVA9X8eG80D960HEgcYJO7Cb8w7Q; user_cellphone=132****7245; consistent_code=eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFugzAQRP9lzxxstmDgmKpVKyWqhMqhp8qGRSCBjYyp2kb595qaRDklxx3N29nZIxi5uO5VtwYKvQxDBMtMNsxHUP3vo2kICnh-2X8eIIJ5UbuLmCZp2mQ5ExmqBBljnOcqyxvv82RphtW0qz6eSq-Mrq7W1c0_KLBltZAKFY9XEAVhTAG8Y0MGpwjoe-otvfcjnQ_35NtEVjpzM6T1IbUl6TaYC86S9MGbE5b5gj-zozEUDHtHsnUntbt-kk_fSMGFwAi-yM690VBg-KCW58NOfwAAAP__.YKJgfkY4o7Ec9k9tfNoOWx0YHS7b4XMzQdy23XHuJ2QdHqBGqn2oY_Q3LB8C5gKD5_wqowNK_f0RZYChspOQY5YULsAvTNudJq5i8yoZ13jcz6QnLlY08aOc78ry2JE1nuYOzFxA2NiwM8Y0t61FXzTc-jMY04zPOdaYsdzGDEI; Hm_lpvt_e2e961d5194c236ca2269b84361558fc=1710564579'


exports.postData = [{
    "audienceCellphone": null,
    "audienceIdentityNumber": "41112119980912651X",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "李一帆",
    "audienceCellphone":"13253717245",
    "seatInfo": "",
    "showOrderTicketItemId": ""
},
{
    "audienceCellphone": null,
    "audienceIdentityNumber": "411121199901097010",
    "audienceIdentityType": "ID_CARD",
    "audienceName": "周省身",
    "audienceCellphone":"18839523550",
    "seatInfo": "",
    "showOrderTicketItemId": ""
}]


