const express = require('express')
const app = express()
const port = 3000
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello Dikshant the Nodejs app is working fine')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
