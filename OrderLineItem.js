"use strict";

const sqlite3 = require("sqlite3").verbose();
// const path = require("path")
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

const populateOrderLineItem = () => {
  const {orderline} = require("./OrderLineItem.json");

  orderline.forEach(e => {
    db.run(`INSERT INTO OrderLineItem VALUES(
      ${e.OrderLineItemId},
      ${e.OrderId},
      ${e.ProductId},
      ${e.Quantity}
    )`, errorHandler)
  });
};
// populateOrderLineItem();

db.all(`SELECT * FROM OrderLineItem`, (err, info) => {
  const result = info.map(e => `${e.OrderLineItemId} on ${e.OrderId}`);

  console.log(result);
});
