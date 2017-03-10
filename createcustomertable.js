"use strict";

const sqlite3 = require("sqlite3").verbose();
const path = require("path")
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

db.run("CREATE TABLE IF NOT EXISTS Customer (CustomerId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, FirstName TEXT NOT NULL, LastName TEXT NOT NULL, Address TEXT NOT NULL, City TEXT NOT NULL, State TEXT NOT NULL, PostalCode TEXT, Phone TEXT)", errorHandler)
// var db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'database.db'));
