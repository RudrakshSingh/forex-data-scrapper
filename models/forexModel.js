const db = require("../db/database"); // Ensure this is correctly connected to SQLite

exports.getForexData = (
  fromCurrency,
  toCurrency,
  fromDate,
  toDate,
  callback
) => {
  // Log the query parameters for debugging
  console.log("Fetching forex data with params:", {
    fromCurrency,
    toCurrency,
    fromDate,
    toDate,
  });

  const query = `
        SELECT * FROM forex_data 
        WHERE from_currency = ? 
        AND to_currency = ? 
        AND date BETWEEN ? AND ?
    `;

  db.all(query, [fromCurrency, toCurrency, fromDate, toDate], (err, rows) => {
    if (err) {
      console.error("SQL Error:", err.message);
      return callback(err, null);
    }

    callback(null, rows);
  });
};
