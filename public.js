//活动域名前缀
exports.urlBase = '6437cab4291ee50001318391'
// 时间信息
exports.saveTime = '2024-03-06 14:00-20:00'
//reservationConfigId 在local的 reserveId
exports.reservationConfigId = '65dc34cc5453020001dfb37a'

// 参数
exports.Referer = `https://${exports.urlBase}.caiyicloud.com/reserve/reserve-detail/personinfo`

// 查询接口
exports.searchURl = `https://${exports.urlBase}.caiyicloud.com//cyy_buyerapi/buyer/cyy/v1/reservation_configs/${exports.reservationConfigId}/instance`

// 请求接口
exports.postUrl = `https://${exports.urlBase}.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5`
