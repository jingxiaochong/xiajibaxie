
  const mysql = require('mysql');
  exports.urlBase = '6437cab4291ee50001318391'
  exports.saveTime = {
    data: '1717171200000',
    startTime: "14:00",
    endTime: "20:00"
}
exports.reservationConfigId = '66580dad816b6d000127d741'

// 参数
exports.Referer = 'https://6437cab4291ee50001318391.caiyicloud.com/reserve/reserve-detail/personinfo'
// 查询接口
exports.searchURl = 'https://6437cab4291ee50001318391.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_configs/66580dad816b6d000127d741/instance'
// 请求接口
exports.postUrl = 'https://6437cab4291ee50001318391.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders?channelId=&terminalSrc=H5'
// 查询顺序接口
exports.searchOrder = `https://6437cab4291ee50001318391.caiyicloud.com/cyy_buyerapi/buyer/cyy/v1/reservation_orders/${res.data.data.id}?src=WEB&channelId=&terminalSrc=WEB`