const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Attack = new Schema(
  {
    Name: { type: String, required: false },
    Shots_Number: { type: Number, required: true },
    BS: { type: Number, required: true },
    S: { type: Number, required: true },
    AP: { type: Number, required: true },
    Damage: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attacker", Attack);
