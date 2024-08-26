const { Pool } = require("pg");
import 

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

pool.on("connect", () => {
  console.log("connected to the db");
});

pool.on("error", (err) => {
  console.error("error connecting to the db:", err);
});

pool.on("remove", () => {
  console.log("client removed");
});

const queryDB = async (query) => {
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { pool, queryDB };

