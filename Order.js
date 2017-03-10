"use strict";

const sqlite3 = require("sqlite3").verbose();
// const path = require("path")
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

const populateOrders = () => {
  const {order} = require("./Order.json");

  order.forEach(e => {
    db.run(`INSERT INTO Order VALUES(
      ${e.OrderId},
      ${e.CustomerId},
      ${e.PaymentOptionId},
      "${e.Paid}"
    )`, errorHandler)
  });
};
// populateOders();

db.all(`SELECT * FROM Order`, (err, info) => {
  const result = info.map(e => `Order number ${e.OrderId} made by ${e.CustomerId}`);

  console.log(result);
});
