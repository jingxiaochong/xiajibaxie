// ==UserScript==
// @name         彩艺云自动填写并提交表单 - 带调试
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  自动填写并提交预约信息表单，包含调试语句
// @author       BruceWen
// @match        https://*.caiyicloud.com/reserve/reserve-detail/personinfo
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Tampermonkey脚本已加载。');

    let checkInterval = setInterval(function() {
        const addButton = document.querySelector('.add-person span');
        if (addButton) {
            console.log('找到添加按钮，点击中...');
            addButton.click();
            clearInterval(checkInterval); // 清除定时检查
            // 点击添加按钮后立即检查表单
            checkAndFillForm();
        } else {
            console.log('未找到添加按钮，重新尝试...');
        }
    }, 100); // 每100毫秒检查一次

    function checkAndFillForm() {
        const nameInput = document.querySelector('.view_form-input[placeholder="请输入观众姓名"]');
        const idNumberInput = document.querySelector('.view_form-input[placeholder="请输入证件号码"]');
        
        if (nameInput && idNumberInput) {
            console.log('找到姓名和证件号输入框，正在设置值...');
            simulateInput(nameInput, "王文静");
            simulateInput(idNumberInput, "310102198807023682");
            submitForm();
        } else {
            // 如果元素仍在渲染，稍后重试
            setTimeout(checkAndFillForm, 50);
        }
    }

    function simulateInput(element, value) {
        const inputEvent = new Event('input', { bubbles: true });
        element.value = value;
        element.dispatchEvent(inputEvent);
    }

    function submitForm() {
        const confirmButton = document.querySelector('.person-confirm');
        if (confirmButton) {
            console.log('找到确认按钮，点击提交...');
            confirmButton.click();
        } else {
            console.error('未找到确认按钮。');
            // 如果按钮仍在渲染，稍后重试
            setTimeout(submitForm, 50);
        }
    }

})();
