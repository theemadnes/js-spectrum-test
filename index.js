const express = require("express");
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
    console.log(`Application started and Listening on port ${port}`);
  });
  

  