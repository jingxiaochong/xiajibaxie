// ==UserScript==
// @name         fill
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  自动填充信息并提交，并查询取号结果
// @author       null
// @license      MIT
// @match        https://*.caiyicloud.com/reserve/reserve-detail/personinfo
// @grant        none
// ==/UserScript==


let myName = ["井晓冲","周省身"]
let idNum = ["411121199808210015","411121199901097010"]
let timeout=500 //每次提交的时间间隔


console.log('启动自动填充脚本')
let count = 0
let flag=false

function checkAndClick(){
    const addButton = document.querySelector('.add-person span');
    if (addButton) {
        console.log('找到添加按钮,正在点击');
        addButton.click();
    } else {
        console.log('未找到添加按钮，正在重试');
        setTimeout(checkAndClick,10);
    }
}

function checkAndClicks(){
    for(let i=0;i<idNum.length;i++){
        checkAndClick()
    }
    checkAndFillForm();
}

function checkAndFillForm() {
    let i=0;
    let j=0;
    const nameInput = document.querySelectorAll('.view_form-input[placeholder="请输入观众姓名"]');
    const idNumberInput = document.querySelectorAll('.view_form-input[placeholder="请输入证件号码"]');
    if (nameInput.length===idNum.length && idNumberInput.length===idNum.length) {
        console.log('找到姓名和身份证输入框');
        nameInput.forEach(ele=>simulateInput(ele,myName[i++]))
        idNumberInput.forEach(ele=>simulateInput(ele,idNum[j++]))
        console.log('已设置好姓名与身份证');

        checkAndSubmit();
        let interval=setInterval(()=>{
            const submitButton = document.querySelector('.person-confirm');
            if(submitButton){
                flag=true;
                count++;
                console.log("找到确认按钮,第", count, "次提交");
                submitButton.click();
            }else if(flag){
                console.log("提交成功");
                clearInterval(interval);
                setTimeout(queryResult,1000);
            }else{
                console.log("未找到确认按钮,正在重试");
            }
        },timeout);

    } else {
        console.log('未找到姓名和证件号输入框或者数量不对，正在重试');
        setTimeout(checkAndFillForm, 1);
    }
}

function simulateInput(element, value) {
    const inputEvent = new Event('input', { bubbles: true });
    element.value = value;
    element.dispatchEvent(inputEvent);
}

function checkAndSubmit(){
    const submitButton = document.querySelector('.person-confirm');
    if(submitButton){
        flag=true;
        count++;
        console.log("找到确认按钮,第", count, "次提交");
        submitButton.click();
    }else if(flag){
        console.log("提交成功");
        clearInterval(interval);
        setTimeout(queryResult,1000);
    }else{
        console.log("未找到确认按钮,正在重试");
    }
}

function queryResult(){
    const queryButton=document.querySelector("#__layout > div > div > div.confirm-layout > div > div.button > div:nth-child(1)");
    if(queryButton){
        console.log("找到查询结果的按钮，即将点击");
        queryButton.click();
    }else{
        console.log("未找到找到查询结果的按钮，即将重试");
        setTimeout(queryResult,1000);
    }
}

checkAndClicks();