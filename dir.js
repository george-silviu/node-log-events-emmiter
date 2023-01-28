const fs = require("fs");
const path = require("path");

//create a new directory if not exists
if (!fs.existsSync(path.join(__dirname, "new"))) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created.");
  });
}

//you may want to check if a directory exists before reading, writing, copy, renaming etc

//if the directory exists remove it
if (fs.existsSync(path.join(__dirname, "new"))) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed!");
  });
}
