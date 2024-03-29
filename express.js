const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = 4396

app.post('/submitToken', (req, res) => {
  console.log(req.body);
  res.send('完成')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))