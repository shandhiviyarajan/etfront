var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'app')));
console.log(path.join(__dirname, 'app'));
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})