const forexModel = require("../models/forexModel"); // Ensure the model path is correct

exports.getForexDataController = (req, res) => {
  const { from, to, fromDate, toDate } = req.body;

  if (!from || !to || !fromDate || !toDate) {
    return res.status(400).json({
      message:
        "Missing required parameters: 'from', 'to', 'fromDate', 'toDate'",
    });
  }

  forexModel.getForexData(from, to, fromDate, toDate, (err, data) => {
    if (err) {
      console.error("Error fetching data:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (!data || data.length === 0) {
      return res
        .status(404)
        .json({ message: "No data found for the provided parameters." });
    }

    res.json(data);
  });
};
