let btn = document.getElementsByClassName('payBtn')[0];

function confirm() {
  btn.click()
}

const start = () => {
  let date = new Date();
  if (date.getHours() == 17 && date.getMinutes() == 59 && date.getSeconds() == 59) {
    setTimeout(() => {
      confirm()
    }, 990);
  } else {
    setTimeout(() => {
      start()
    }, 1);
  }
}
start()


