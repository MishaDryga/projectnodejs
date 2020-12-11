const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
  );
  
app.get('/table1', db.getUsers)
app.get('/table1/:id', db.getUserById)
app.use(express.static("site"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})