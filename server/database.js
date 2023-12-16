const { Pool } = require("pg");

const pool = new Pool({
  user: "inder",
  password: "#@inder#@",
  host: "localhost",
  port: 5432,
});

pool
  .query("CREATE DATABASE Booking_app")
  .then((Response) => {
    console.log("Database created");
    console.log(Response);
  })
  .catch((err) => {
    console.log(err);
  });

// pool.connect();

module.exports = pool;
