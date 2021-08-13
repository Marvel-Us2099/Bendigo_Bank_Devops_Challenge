// To run the application:
// open powershell
// Change the working directory to "~/Bendigo_Bank_Devops_Challenge/"
// run "npm install"
// run "npm init" 
// run "nodemon run startAPI" in the terminal for automatic server restart 

var http = require('http');
//"module1.js" is used for Display module 
var dt = require('./module1');

http.createServer(function (req, res) {
    var pjson = require('./package.json');
    var revision = require('child_process').execSync('git rev-parse HEAD').toString().trim();
    
    //Titles to be bolded for easier reading when displayed to the user.
    var titleName = "Application Name: ";
    var titleVersion = "Version: ";
    var titleGitHash = "Latest Git Commit Hash: "
    var titleDateTime = "Current Date & Time: ";
    var titleProject = "AFL Stat API:<br />";

// Responces. 
  res.writeHead(200, {'Content-Type': 'text/html'}); //Is not required, but what is meant by 'display status 200'
  res.write(titleName.bold() + pjson.name + " <br /> ");
  res.write(titleVersion.bold() + pjson.version + "<br />");
  res.write(titleGitHash.bold() + revision + "<br />");
  res.write(titleDateTime.bold() + dt.myDateTime());
  res.write("<br /><br /><br />" + titleProject.bold().fontsize(6));

  res.end();
}).listen(8080);
