"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

db.run("CREATE TABLE IF NOT EXISTS Order (OrderId INTEGER NOT NULL AUTOINCREMENT PRIMARY KEY, CustomerId INT, PaymentOptionId INT, Paid TEXT, FOREIGN KEY(CustomerId) REFERENCES Customer(CustomerId), FOREIGN KEY(PaymentOptionId) REFERENCES PaymentOption(PaymentOptionId))", errorHandler);
