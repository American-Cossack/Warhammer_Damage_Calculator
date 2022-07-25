const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Defend = new Schema(
  {
    Name: { type: String, required: false },
    T: { type: Number, required: true },
    Wounds: { type: Number, required: true },
    Save: { type: Number, required: true },
    Inv_Save: { type: Number, required: false },
    FNP: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Defender", Defend);
