const db = require("../db");
const Solution = require("../models/Solution");
const Attack = require("../models/Attacker");
const Defend = require("../models/Defender");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const sltn = [
    {
      woundsDealt: "",
    },
  ];

  await Attack.insertMany(atck);
  console.log("Attacking foul heretics!");
};
const run = async () => {
  await main();
  db.close();
};
