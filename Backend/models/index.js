const { model } = require("mongoose");
const Attack = require("./Attacker");
const Defend = require("./Defender");

const Attack = model("Attacker", Attack);
const Defend = model("Defender", Defend);

module.exports = {
  Attack,
  Defend,
};
