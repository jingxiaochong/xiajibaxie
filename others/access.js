
// 清空 Session Cookie
document.cookie.split(";").forEach(function(c) {
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
});
// 清空 Local Storage
localStorage.clear();
localStorage.setItem('ACCESS_TOKEN', '1234');