let btn = document.getElementsByClassName('payBtn')[0];

function confirm() {
  btn.click()
}
// setInterval(() => {
//   confirm()
// }, 100);

const start = () => {
  let date = new Date();
  if (date.getHours() == 19 && date.getMinutes() == 0 && date.getSeconds() == 0) {
    confirm()
    setInterval(() => {
      confirm()
    }, 2000);
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}
start()


