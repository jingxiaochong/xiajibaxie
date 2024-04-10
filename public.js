//活动域名前缀
exports.urlBase = '6437cab4291ee50001318391'
// 时间信息
exports.saveTime = {
  data:'1712764800000',
  startTime:"14:00",
  endTime:"20:00"
}
//reservationConfigId 在local的 reserveId
exports.reservationConfigId = '66126d1314f60000011f8b02'

// 参数
exports.Referer = `https://${exports.urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`

// 查询接口
exports.searchURl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/${exports.reservationConfigId}/instance`

// 请求接口
exports.postUrl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
