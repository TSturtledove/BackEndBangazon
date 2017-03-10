"use strict";

const sqlite3 = require("sqlite3").verbose();
// const path = require("path")
const db = new sqlite3.Database("./bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};

const populateProducts = () => {
  const {Product} = require("./Products.json");

  Product.forEach(e => {
    db.run(`INSERT INTO Product VALUES(
      ${e.ProductId},
      "${e.Name}"
    )`, errorHandler)
  });
};
// populateProducts();

db.all(`SELECT * FROM Product`, (err, info) => {
  const result = info.map(e => `${e.Name}`);

  console.log(result);
});
