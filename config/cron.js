const cron = require("node-cron");
const { scrapeForexData } = require("./utils/dataUtils");
const { saveForexData } = require("./models/forexModel");

// Define a cron job to scrape data every day at midnight
cron.schedule("0 0 * * *", async () => {
  console.log("Starting cron job to scrape forex data...");

  const currencyPairs = [
    { from: "GBP", to: "INR" },
    { from: "AED", to: "INR" },
  ];

  for (let pair of currencyPairs) {
    try {
      const data = await scrapeForexData(
        pair.from,
        pair.to,
        "2023-01-01",
        "2023-12-31"
      );
      saveForexData(data);
      console.log(`Successfully saved data for ${pair.from} to ${pair.to}`);
    } catch (error) {
      console.error(
        `Failed to scrape data for ${pair.from} to ${pair.to}`,
        error
      );
    }
  }
});
