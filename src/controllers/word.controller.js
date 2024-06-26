const { connection } = require("../db/mysql");
const { generateRandomString } = require("../utils/common.util");

const table = {
  words: "words",
};

const getWordsApi = (req, res) => {
  console.log("object");
  const sql = `SELECT * FROM ${table.words}`;
  connection.query(sql, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json({ result: "success", data: rows });
  });
};

const registerWordApi = (req, res) => {
  const { word_name, word_name_jp } = req.body;
  console.log(word_name, word_name_jp);
  const word_id = generateRandomString(35);
  const sql = `INSERT INTO ${table.words} (word_id, word_name, word_name_jp) VALUES (?, ?, ?)`;
  const values = [word_id, word_name, word_name_jp];
  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(result);
    res.status(200).json({ result: "success" });
  });
};

const deleteWordApi = (req, res) => {
  const { word_id } = req.body;
  const sql = `delete from ${table.words} where word_id = ?`;
  const values = [word_id];
  connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json({ result: "success" });
  });
  connection.query;
};

module.exports = {
  getWordsApi,
  registerWordApi,
  deleteWordApi,
};
