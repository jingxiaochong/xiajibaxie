// fetch("https://6437cab4291ee50001318391.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/6674fee11884c80001e26be4/instance?src=H5&channelId=&terminalSrc=H5&id=6674fee11884c80001e26be4", {
//     "headers": {
//       "accept": "application/json, text/plain, */*",
//       "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFOwzAQRP9lzzlk7U2c9lgEAgmEVNEDJ-QkWzVSbFeOg4Cq_84Go6onOHo088Y7Jwh2TocHvw-w9vM4FjBPHPP7BO3wdRN6hjXc3T--PUEB09xuLmJN2nS2JbVC5qosS9TY6BWKT5LbMC6mze71diuKS91uQfdLsK5tpU2LpJn2SxBtj1WVg__ZDJwL4I_jEPllcNKBRmlSjVJiKX8Qz0eONoU_MbW0dZFtulCwUURkUBPKpZ9TYpcvzcs4jt3B-nS9lnzjur-Ad47TELyIeUpv3S_g_A0AAP__.Jdk0VmlHR6Hx4c7r6lTdTmPmDqE55lYazwEihnZ3OBxpJlkxt5FX5laRyGPPT29Lk_yMJ6FwF1YanmDbkeO4eRuLNr9_b23xfKVRdaQcS6n6xYOEe3FbF3r86hVh4BaLWjAhH5qb40GBXl5wmdIgXXI_6C4JGhtGJAKDsijVsi8",
//       "channel-id": "",
//       "content-type": "application/json;charset=UTF-8",
//       "terminal-src": "H5",
//       "ver": "1.0.0",
//       "x-requested-with": "XMLHttpRequest",
//       "Referer": "https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/6674fee11884c80001e26be4",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
//   }).then((res)=>{
//     console.log(res);
//   })

  fetch('https://6437cab4291ee50001318391.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/6674fee11884c80001e26be4/instance?src=H5&channelId=&terminalSrc=H5&id=6674fee11884c80001e26be4',{
    "headers": {
        "accept": "application/json, text/plain, */*",
        "access-token": "eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFOwzAQRP9lzzlk7U2c9lgEAgmEVNEDJ-QkWzVSbFeOg4Cq_84Go6onOHo088Y7Jwh2TocHvw-w9vM4FjBPHPP7BO3wdRN6hjXc3T--PUEB09xuLmJN2nS2JbVC5qosS9TY6BWKT5LbMC6mze71diuKS91uQfdLsK5tpU2LpJn2SxBtj1WVg__ZDJwL4I_jEPllcNKBRmlSjVJiKX8Qz0eONoU_MbW0dZFtulCwUURkUBPKpZ9TYpcvzcs4jt3B-nS9lnzjur-Ad47TELyIeUpv3S_g_A0AAP__.Jdk0VmlHR6Hx4c7r6lTdTmPmDqE55lYazwEihnZ3OBxpJlkxt5FX5laRyGPPT29Lk_yMJ6FwF1YanmDbkeO4eRuLNr9_b23xfKVRdaQcS6n6xYOEe3FbF3r86hVh4BaLWjAhH5qb40GBXl5wmdIgXXI_6C4JGhtGJAKDsijVsi8",
        "channel-id": "",
        "content-type": "application/json;charset=UTF-8",
        "terminal-src": "H5",
        "ver": "1.0.0",
        "x-requested-with": "XMLHttpRequest",
        "Referer": "https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/6674fee11884c80001e26be4",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // 将响应解析为 JSON
  })
  .then(data => {
    console.log(data); // 处理返回的数据
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
