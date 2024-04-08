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

app.post('/addToken', (req, res) => {
  console.log(req.body);
  connection.query(`INSERT INTO tokens (access_token,user,card_id,phone) VALUES ('${req.body.token}','${req.body.user_name}','${req.body.card_id}','${req.body.phone}')`, function (err, results, fields) {
    if (err) {
      return res.send(err)
    }
    res.send('success')
  })
})

app.get('/clearToken', (req, res) => {
  connection.query('DELETE FROM tokens', function (err, results, fields) {
    if (err) {
      return res.send(err)
    }
    res.send('success')
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))