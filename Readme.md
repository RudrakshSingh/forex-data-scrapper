# Web Scrapping Project

This project involves scraping historical exchange data from Yahoo Finance and exposing it through a REST API. The data is stored in an SQLite in-memory database and can be queried for specific currency pairs and periods. The project also includes a cron job for periodic data scraping to keep the database updated.

## Databse Used in SqlLite3

## Setup

### Prerequisite

Node.js (>= 14.x)
npm (>= 6.x)

## Installation

```Bash
npm install
Start the API Server
```

```Bash
node index.js
```

## Query Parameter

from: Currency code (e.g., GBP, AED)
to: Currency code (e.g., INR)
period: Timeframe for data (e.g., 1W, 1M, 3M, 6M, 1Y)
