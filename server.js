const express = require('express'),
      app = express(),
      p = require('ua-parser-js');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  var os = p(req.get('User-Agent')).os;
  var lang = req.get('Accept-Language').split(',')[0];
  var resObj = {
    ipaddress: req.ip,
    language: lang,
    software: `${os.name} ${os.version}`
  }

  res.json(resObj);
}).listen(port);
