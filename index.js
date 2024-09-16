const express = require("express");
const cron = require("node-cron");
const forexRoutes = require("./routes/forexRoutes");
const { scrapeForexData } = require("./controller/forexController");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api", forexRoutes);

// Test route
app.get("/test", (req, res) => {
  res.send("Server is working!");
});

// Scheduled Scraping Job using node-cron
cron.schedule("0 0 * * *", () => {
  console.log("Running scheduled scraping task...");
  scrapeForexData("GBP", "INR", "2023-01-01", "2023-12-31");
  scrapeForexData("AED", "INR", "2023-01-01", "2023-12-31");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
