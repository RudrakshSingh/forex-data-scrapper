const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/forex_data.db", (err) => {
  if (err) {
    console.error("Error opening SQLite database:", err.message);
  } else {
    db.run(`
      CREATE TABLE IF NOT EXISTS forex_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        from_currency TEXT,
        to_currency TEXT,
        date TEXT,
        open REAL,
        high REAL,
        low REAL,
        close REAL,
        volume REAL
      )
    `);
  }
});

module.exports = db;
