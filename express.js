const express = require('express')
const app = express()
const port = 4396

app.post('/', (req, res) => {
  console.log(req);
  res.send('您提交的数据是',req.body)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))