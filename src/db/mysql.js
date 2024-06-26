const mysql = require("mysql");

const dbConfig = {
  host: "sql12.freesqldatabase.com",
  user: "sql12716173",
  password: "pVr4dxAWPh",
  database: "sql12716173",
};
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.log("failed to connect to database");
  }

  console.log("successfully connected to database");
});
module.exports = {
  connection,
  dbConfig,
};
