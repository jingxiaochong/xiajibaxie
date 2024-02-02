function confirm() {
  let btn = document.getElementsByClassName('payBtn')[0];
  btn.click()
  setTimeout(() => {
    confirm()
  }, 1800);
}

const start = () => {
  let date = new Date();
  if (date.getMinutes() == 30) {
    confirm()
  } else {
    console.log(date.getMinutes());
    setTimeout(() => {
      start()
    }, 1);
  }
}
start()



// getMinutes()