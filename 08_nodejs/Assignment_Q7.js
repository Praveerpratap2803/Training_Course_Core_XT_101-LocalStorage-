/*
7. Write a script that lists the name of the file (the script itself), and folder name within it exists.
Use path module's join() method to display the complete path of the parent folder.
Hint: The string '..' can be joined with the current folder path to get the parent folder path.
*/

const path = require("path");
console.log(path.join(__dirname,"Assignment_Q7.js"))








