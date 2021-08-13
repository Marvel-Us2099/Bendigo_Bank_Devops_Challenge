
// Add documentation...

//Developed using wsl (Windows Subsystem for Linux)

// TO run application:
// Change the working directory to "~/Bendigo_Bank_Devops_Challenge/"
// run "nodemon nun startAPI" in the terminal for automatic server restart 


////Display time from module "module1.js"
var http = require('http');
var dt = require('./module1');


http.createServer(function (req, res) {
    
    //
    var pjson = require('./package.json');
    var revision = require('child_process').execSync('git rev-parse HEAD').toString().trim();
    
    //Titles to be bolded for easier reading when displayed to the user.
    var titleName = "Application Name: ";
    var titleVersion = "Version: ";
    var titleGitHash = "Latest Git Commit: "
    var titleDateTime = "Current Date & Time: ";



  res.write(titleName.bold() + pjson.name + " <br /> ");
  res.write(titleVersion.bold() + pjson.version + "<br />");
  res.write(titleGitHash.bold() + revision + "<br />");
  res.write(titleDateTime.bold() + dt.myDateTime());
  res.end();
}).listen(8080);