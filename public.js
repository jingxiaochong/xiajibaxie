//活动域名前缀
exports.urlBase = '643d105cee39e30001732fdb'
// 时间信息
exports.saveTime = '2024-03-07 12:00-16:00'
//reservationConfigId 在local的 reserveId
exports.reservationConfigId = '65e5c5e97ea09c0001b18d3e'

// 参数
exports.Referer = `https://${exports.urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`

// 查询接口
exports.searchURl = `https://${exports.urlBase}.caiyicloud.com//cyy_buyerapi/buyer/cyy/v1/reservation_configs/${exports.reservationConfigId}/instance`

// 请求接口
exports.postUrl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
