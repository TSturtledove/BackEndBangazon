"use strict";

const sqlite3 = require("sqlite3").verbose();
// const path = require("path")
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

const populatePaymentOptions = () => {
  const {options} = require("./PaymentOptions.json");

  options.forEach(e => {
    db.run(`INSERT INTO PaymentOption VALUES(
      ${e.PaymentOptionId},
      "${e.AccountNumber}"
    )`, errorHandler)
  });
};
// populateCustomers();
