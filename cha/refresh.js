// ==UserScript==
// @name         refresh
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  自动刷新日期界面
// @author       null
// @match        https://*.caiyicloud.com/reserve/reserve-detail/*
// @exclude      https://*.caiyicloud.com/reserve/reserve-detail/personinfo
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==
let time=new Date(2024,5,22,13,59,50)//注意，月份从0开始

$(document).ready(function(){
    setTimeout(wait,500);
});

function wait(){
    let curTime=new Date()
    console.log('当前时间为',curTime.toLocaleTimeString(),'倒计时',(time-curTime)/1000,'秒')
    if(curTime<time){
        setTimeout(wait,1000)
    }else {
        refresh_and_enter()
    }
}
function refresh_and_enter() {
    let ele_enter_btn = "#__layout > div > div > div.confirm-btn.disable";
    let enter_btn = document.querySelector(ele_enter_btn);
    const title=document.querySelector('.title');
    if(enter_btn&&enter_btn.innerText=== "确定"){
        enter_btn.click();
    }else if(title&&title.innerText=== "选择参观日期"){
        window.location.reload();
    }
}
