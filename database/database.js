const sqlite3 = require('sqlite3');
const path = require('path');
const dataBasePath = path.resolve(__dirname,"data.sqlite");
console.log(dataBasePath)
const db = new sqlite3.Database(dataBasePath, (err) => {
    if (err) {
        console.log(err.message);
    }
    else{
        console.log("Connected to the database");
    }
});

module.exports = db;