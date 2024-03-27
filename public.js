//活动域名前缀
exports.urlBase = '6437cab4291ee50001318391'
// 时间信息
exports.saveTime = {
  data:'1711468800000',
  startTime:"12:00",
  endTime:"18:00"
}
//reservationConfigId 在local的 reserveId
exports.reservationConfigId = '6600e88ca240d00001a54660'

// 参数
exports.Referer = `https://${exports.urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`

// 查询接口
exports.searchURl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${exports.reservationConfigId}/instance`

// 请求接口
exports.postUrl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
