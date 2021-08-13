
// Add documentation...

// --- "npm run startAPI2" to start local server ---
// --- or "nodemon nun startAPI2" for automatic server restart 
// code added to package.json 
// "startAPI2": "node test_nodejs_api2.js"


////Display time from module "module1.js"
var http = require('http');
var dt = require('./module1');

http.createServer(function (req, res) {
    var titleName = "Application Name: ";
    var titleVersion = "Version: ";
    var titleDateTime = "Current date and time: ";
    var pjson = require('./package.json');

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(titleName.bold() + pjson.name + " <br /> " + titleVersion.bold() + pjson.version + "<br />")
  res.write(titleDateTime.bold() + dt.myDateTime());
  res.end();
}).listen(8080);