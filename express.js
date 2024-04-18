const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = 4396

connection = mysql.createConnection({
  // host: '116.62.122.121',
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'jxc123456',
  charset: 'utf8',
  database: 'info'
})

function beforeFunction(req, res, next) {
  // 连接数据库
  connection.connect();

  // 处理请求
  next()

  // 断开数据库连接
  connection.end();
}
// app.use(beforeFunction)
// 新增token
app.post('/addToken', (req, res) => {
  console.log(req.body);
  connection.query(`INSERT INTO tokens (access_token,user,card_id,phone,refresh_token) VALUES ('${req.body.token}','${req.body.user_name}','${req.body.card_id}','${req.body.phone}','${req.body.refreshToken}')`, function (err, results, fields) {
    if (err) {
      return res.send(err)
    }
    res.send('success')
  })
})

// 清空token
app.get('/clearToken', (req, res) => {
  connection.query('DELETE FROM tokens', function (err, results, fields) {
    if (err) {
      return res.send(err)
    }
    res.send('success')
  })
})

// 获取token
app.get('/getTokenList', (req, res) => {
  connection.query('SELECT * FROM tokens', function (err, results, fields) {
    if (err) {
      return res.send(err)
    }
    res.send(results)
  })
})

// 清空列表
app.get('/clearTable', (req, res) => {
  connection.query('DELETE FROM succeed', function (err, results, fields) {
    if (err) {
      return res.send(err)
    }
    res.send('success')
  })
})

// 修改活动信息
app.post('/editActive', (req, res) => {
  console.log(req.body);
  connection.query(`DELETE FROM active_info`, function (err, results, fields) {
    connection.query(`INSERT INTO active_info (data,startTime,endTime,reservationConfigId,urlBase) VALUES ('${req.body.data}','${req.body.startTime}','${req.body.endTime}','${req.body.reservationConfigId}','${req.body.urlBase}')`, function (err, results, fields) {
      if (err) {
        return res.send(err)
      }
      res.send('success')
    })
  })
})

let num = 0
// 记录访问次数
app.get('/getNumbers',(req,res) => {
  res.send(JSON.stringify(num))
  num += 1
})

let infoNum = 0
// 按顺序获取不同用户信息
app.get('/getInfo',(req,res) => {
  connection.query('SELECT * FROM tokens', function (err, results, fields) {
    res.send(results[infoNum])
    infoNum += 1
  })

})

// 处理请求成功后的数据
app.post('/putUserInfo',(req,res) => {
  connection.query('UPDATE tokens SET succeed_id = ? WHERE access_token = ?', [req.body.data.id, req.body.data.token], (error, results, fields) => {
    if (error){
      return res.send(error)
    }
    return res.send('succeed')
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))