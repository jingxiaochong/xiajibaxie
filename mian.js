current = location.href;
let flag = true
var iframe
setTimeout('reload()', 100);
function reload() {
  // 刷新
  var frame = '<frameset cols=\'*\'>\n<frame id="jingxc" src=\'' + current + '\' /></frameset>';
  with (document) {
    write(frame);
    void (close());
  };
  iframe = document.getElementById('jingxc');
  iframe.addEventListener('load', function () {
    const iframeElement = iframe.contentWindow.document.querySelector('.confirm-btn');
    console.log(iframeElement);

    if (iframeElement && iframeElement.textContent == '确定' && flag) {
      // 可以点确定啦
      flag = false
      iframeElement.click()
    } else if(flag){
      // 没有到操作界面 继续刷新
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
        // 防止提交失败 此后再次提交
        setTimeout(() => {
          iframe.contentWindow.document.querySelector('.person-confirm').click()
        }, 1000);
      }, 0);
    }
  });
}