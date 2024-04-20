// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-04-17
// @author       You
// @match        https://*.caiyicloud.com/*
// @grant        none
// ==/UserScript==

'use strict';
window.onload = function () {
    let arr = window.location.href.split('/')
    console.log(arr[arr.length - 1]);
    if (arr[arr.length - 1] == 'personinfo') {
        searchPerson()
    } else {
        searchBtn()
    }

};
function searchBtn() {
    let btn = document.querySelector('.confirm-btn');
    if (btn) {
        // btn.textContent == '所选日期将于17日14点00分开放预约'
        if (btn.textContent != '确定') {
            setTimeout(() => {
                window.location.reload(true)
            }, 100)
        } else {
            btn.click()
        }

    } else {
        setTimeout(() => {
            searchBtn();
        }, 1)
    }
};
function searchPerson() {
    if (document.querySelector('.add-person')) {
        document.querySelector('.add-person').click()
        setTimeout(() => {
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);

            document.getElementsByClassName('view_form-input')[0].value = '井晓冲';
            document.getElementsByClassName('view_form-input')[0].dispatchEvent(evt)

            document.getElementsByClassName('view_form-input')[2].value = '411121199808210015';
            document.getElementsByClassName('view_form-input')[2].dispatchEvent(evt)
            document.querySelector('.person-confirm').click()

            setInterval(() => {
                document.querySelector('.person-confirm').click()
            }, 500);

        }, 0)

    } else {
        searchPerson()
    }
}
