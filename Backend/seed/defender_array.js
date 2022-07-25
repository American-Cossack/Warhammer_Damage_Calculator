const db = require("../db");
const Defend = require("../models/Defender");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const dfnd = [{ name: "Space Marine", T: 4, Wounds: 2, Save: 3 }];

  await Defend.insertMany(dfnd);
  console.log("Created some D#");
};
const run = async () => {
  await main();
  db.close();
};

run();
