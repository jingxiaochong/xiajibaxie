const axios = require('axios')
axios.post('https://ali.xudankeji.com/svc/11563029/crcexyza3j50000mhpbg', {
    data: {
        姓名: "赵云鹏",
        平台: "大麦",
        电话: "15324961009",
        票号: "4214141",
        类型: "普通",
        身份证: "231004199603270334",
    },
    _nid: 11563029,
    _sid: "crcexyza3j50000mhpbg",
    _uid: 92564,
}).then((res) => {
    console.log(res.data);
})

//cocdem7bv4pg36rsplq0-release在前端写死了 傻逼官方
// https://cdnali.xudankeji.com/projects/works/cocdem7bv4pg36rsplq0-release/player.js

// const axios = require('axios')
// axios.post('https://ali.xudankeji.com/svc/11563029/crcexyza3j50000mhpbg', {
//     data: {
//         姓名: "赵云鹏",
//         平台: "大麦",
//         电话: "15324961009",
//         票号: "4214141",
//         类型: "普通", //VIP
//         身份证: "231004199603270334",
//     },
//     _eid: 0,
//     _gid: 0,
//     _lang: "zh",
//     _locOffset: 28800,
//     _nid: 11563029,
//     _sid: "crcexyza3j50000mhpbg",
//     _uid: 92564,
// }).then((res) => {
//     console.log(res.data);
// })