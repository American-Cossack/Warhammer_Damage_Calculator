const Attack = require("../models/Attacker");
const Defend = require("../models/Defender");

const Solution = new Schema(
  { woundsDealt: { type: Number, required: true } },

  { timestamps: true }
);

module.exports = mongoose.model("Solutions", Solution);
