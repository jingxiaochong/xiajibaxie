const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = 4396

const connection = mysql.createConnection({
  host: '116.62.122.121',
  port: '3306',
  user: 'root',
  password: 'jxc123456',
  charset: 'utf8',
  database: 'info'
})

// 新增token
app.post('/addToken', (req, res) => {
  console.log(req.body);
  connection.query(`INSERT INTO tokens (access_token,user,card_id,phone) VALUES ('${req.body.token}','${req.body.user_name}','${req.body.card_id}','${req.body.phone}')`, function (err, results, fields) {
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
  num += 1
  res.send(`'${num}'`)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))