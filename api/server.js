const express = require("express");
const app = express();
const port = 3001

app.get('/', function (req, res) {
  return res.send('Hello word api')
})

app.listen(port, function () {
  console.log("NodeJS is running localhost:" + port);
});