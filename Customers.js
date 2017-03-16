"use strict";

const sqlite3 = require("sqlite3").verbose();
// const path = require("path")
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

const populateCustomers = () => {
  const {customers} = require("./Customers.json");

  customers.forEach(e => {
    db.run(`INSERT INTO Customer VALUES(
      ${e.CustomerId},
      "${e.FirstName}",
      "${e.LastName}",
      "${e.Address}",
      "${e.City}",
      "${e.State}",
      "${e.PostalCode}",
      "${e.Phone}"
    )`, errorHandler)
  });
};
// populateCustomers();

db.all(`SELECT * FROM Customer`, (err, info) => {
  const result = info.map(e => `${e.FirstName} ${e.LastName} lives at ${e.Address}`);

  console.log(result);
});
