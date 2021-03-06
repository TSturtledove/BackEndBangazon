"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const errorHandler = (err) => {
  if(err) {
    console.log(`There was an error, ${err}`);
  };
};
//Replace the _ with the table name you wish to drop.

const drop_ = () => {
  db.run(`DROP TABLE _`, errorHandler);
};
drop_();
