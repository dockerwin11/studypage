const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello My Container Project!!')
})

app.listen(port, () => {
  console.log('Example app listening at port %s', port)
})
