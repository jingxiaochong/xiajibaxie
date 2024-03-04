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
    const iframeElement = iframe.contentWindow.document.querySelector('.payBtn');
    console.log(iframeElement);

    if (iframeElement && iframeElement.textContent == '立即支付 ¥598.00' && flag) {
      // 可以点确定啦
      flag = false
      iframeElement.click()
    } else if(flag){
      // 没有到操作界面 继续刷新
      setTimeout('reload()', 2000);
    }

  });
}