"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

db.run("CREATE TABLE IF NOT EXISTS Customer (CustomerId INT, FirstName TEXT, LastName TEXT, Address TEXT, City TEXT, State TEXT, PostalCode INT, Phone INT)", errorHandler)
