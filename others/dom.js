current = location.href;
let flag = true
var iframe
setTimeout('reload()', 100);
function reload() {
  var frame = '<frame id="jingxc" src=\'' + current + '\' />';
  with (document) {
    write(frame);
    void (close());
  };
  iframe = document.getElementById('jingxc');
  iframe.addEventListener('load', function () {
    const iframeElement = iframe.contentWindow.document.querySelector('.confirm-btn');
    console.log(iframeElement);

    // iframeElement && iframeElement.textContent == '所选日期将于02日14点00分开放预约'
    // iframeElement && iframeElement.textContent == '确定'
    if (iframeElement && iframeElement.textContent == '确定' && flag) {
      flag = false
      iframeElement.click()
      // iframe.src = 'https://6566d890783b53000119b89d.caiyicloud.com/reserve/reserve-detail/personinfo'
    } else if(flag){
      setTimeout('reload()', 100);
    }
    // 监听加载完毕 如果到了填写页面
    if (iframe.contentWindow.document.querySelector('.add-person')) {

      iframe.contentWindow.document.getElementsByClassName('add-person')[0].click()
      setTimeout(() => {
        let evt = iframe.contentWindow.document.createEvent('HTMLEvents');
        evt.initEvent('input', true, true);

        iframe.contentWindow.document.getElementsByClassName('view_form-input')[0].value = '井晓冲';
        iframe.contentWindow.document.getElementsByClassName('view_form-input')[0].dispatchEvent(evt)

        iframe.contentWindow.document.getElementsByClassName('view_form-input')[2].value = '411121199808210015';
        iframe.contentWindow.document.getElementsByClassName('view_form-input')[2].dispatchEvent(evt)

        iframe.contentWindow.document.querySelector('.person-confirm').click()
      }, 0);
    }
  });
}