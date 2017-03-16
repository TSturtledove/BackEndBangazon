"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

db.run("CREATE TABLE IF NOT EXISTS OrderInfo ( OrderId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, CustomerId INT, PaymentOptionId INT, Paid TEXT, FOREIGN KEY(CustomerId) REFERENCES Customer(CustomerId), FOREIGN KEY(PaymentOptionId) REFERENCES PaymentOption(PaymentOptionId))", errorHandler);
