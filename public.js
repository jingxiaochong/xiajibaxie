//活动域名前缀
exports.urlBase = '6566d890783b53000119b89d'
// 时间信息
exports.saveTime = {
  data:'1711123200000',
  startTime:"19:30",
  endTime:"21:30"
}
//reservationConfigId 在local的 reserveId
exports.reservationConfigId = '65fc39fae298390001fc7dd3'

// 参数
exports.Referer = `https://${exports.urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`

// 查询接口
exports.searchURl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${exports.reservationConfigId}/instance`

// 请求接口
exports.postUrl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
