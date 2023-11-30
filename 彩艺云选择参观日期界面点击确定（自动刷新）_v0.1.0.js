// ==UserScript==
// @name         彩艺云选择参观日期界面点击确定（自动刷新）
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  在彩艺云选择参观日期界面点击确定按钮，并在指定时间范围内自动刷新页面
// @author       BruceWen
// @match        https://*.caiyicloud.com/reserve/reserve-detail/*
// @exclude      https://*.caiyicloud.com/reserve/reserve-detail/personinfo
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log('Tampermonkey脚本已加载。');

    function checkAndClick() {
        // 获取确定按钮
        const confirmButton = document.querySelector('.confirm-btn');

        // 检查按钮内容是否为“确定”
        if (confirmButton && confirmButton.textContent === '确定') {
            // 点击确定按钮
            confirmButton.click();
            console.log('成功点击确定按钮！');
            return; // 如果成功点击确定按钮，结束循环
        } else {
			// 如果按钮内容不是“确定”，则输出调试信息并定时执行检查
			console.log("等待按钮状态变为“确定”...");
			
			// 获取当前时间
			const currentTime = new Date();

			// 指定刷新的时间范围
			const refreshStartTime = new Date(2023, 10, 19, 11, 59, 57);
			const refreshEndTime = new Date(2023, 10, 19, 12, 0, 10);

			// 如果当前时间在指定范围内，执行自动刷新
			if (currentTime >= refreshStartTime && currentTime <= refreshEndTime) {
				console.log('在指定时间范围内，执行自动刷新...');
				location.reload();
			} 

			// 延迟50毫秒后进行下一次检查和刷新
			setTimeout(checkAndClick, 50);
		}
    }

    // 开始执行检查和刷新
    checkAndClick();
})();
