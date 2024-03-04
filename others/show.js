function confirm() {
  let btn = document.getElementsByClassName('payBtn')[0];
  btn.click()
  setTimeout(() => {
    confirm()
  }, 1800);
}

const start = () => {
  let date = new Date();
  if (date.getHours() == 18) {
    confirm()
  } else {
    console.log(date.getSeconds());
    // date.getMinutes()
    setTimeout(() => {
      start()
    }, 1);
  }
}
start()


