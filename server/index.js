const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');

const PORT = 8080;

const STATIC = path.resolve(__dirname,'../', 'build');
const INDEX = path.resolve(STATIC, 'index.html');


const app = express();
app.use(bodyParser.json());

// Static content
// app.use(express.static(STATIC));
app.use(expressStaticGzip(STATIC, {
  enableBrotli: true
}))

// All GET request handled by INDEX file
app.get('*', function (req, res) {
  res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
  console.log('Server up and running on ', `http://localhost:${PORT}/`);
});