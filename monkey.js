// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-04-17
// @author       You
// @match        https://*.caiyicloud.com/*
// @grant        none
// ==/UserScript==

'use strict';
let flag = true;
window.onload = function(){
      if(flag){
          searchBtn()
      }else{
          searchPerson()
      }
  };
function searchBtn(){
  let btn = document.querySelector('.confirm-btn');
  if(btn){
      console.log(btn.textContent)
      if(btn.textContent == '所选日期将于17日14点00分开放预约'){
          setTimeout(()=>{
              window.location.reload(true)
          },100)
      }else{
          flag = false;
          btn.click()
      }

  }else{
      setTimeout(()=>{
          searchBtn();
      },1)
  }
  };
function searchPerson(){
  if(document.querySelector('.add-person')){
      document.getElementsByClassName('add-person')[0].click()
      setTimeout(()=>{
          let evt = document.createEvent('HTMLEvents');
          evt.initEvent('input', true, true);

          document.getElementsByClassName('view_form-input')[0].value = '井晓冲';
          document.getElementsByClassName('view_form-input')[0].dispatchEvent(evt)

          document.getElementsByClassName('view_form-input')[2].value = '411121199808210015';
          document.getElementsByClassName('view_form-input')[2].dispatchEvent(evt)

          document.querySelector('.person-confirm').click()})
  }else{
      searchPerson()
  }
}
