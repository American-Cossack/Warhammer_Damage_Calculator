const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Attack = new Schema(
  {
    _id: { type: Number, required: false },
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
