"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

db.run("CREATE TABLE IF NOT EXISTS OrderLineItem (OrderLineItemId INTEGER NOT NULL AUTOINCREMENT PRIMARY KEY, OrderId INT, ProductId INT, Quantity INT, FOREIGN KEY(OrderId) REFERENCES Order(OrderId))", errorHandler)
