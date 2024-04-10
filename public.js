const mysql = require('mysql');
exports.urlBase = ''
exports.saveTime = {
  data: '',
  startTime: "",
  endTime: ""
}
exports.reservationConfigId = ''


const connection = mysql.createConnection({
  host: '116.62.122.121',
  port: '3306',
  user: 'root',
  password: 'jxc123456',
  charset: 'utf8',
  database: 'info'
})
connection.query(`SELECT * FROM active_info;`, (error, results, fields) => {
  if (error) {
    console.log(error);
  }
  exports.urlBase = results[0].urlBase
  exports.saveTime.data = results[0].data
  exports.saveTime.startTime = results[0].startTime
  exports.saveTime.endTime = results[0].endTime
  exports.reservationConfigId = results[0].reservationConfigId
  // 参数
  exports.Referer = `https://${exports.urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`
  // 查询接口
  exports.searchURl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${exports.reservationConfigId}/instance`
  // 请求接口
  exports.postUrl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
})


connection.end(function (err) {
  if (err) {
    return console.log(err.message);
  }
});
