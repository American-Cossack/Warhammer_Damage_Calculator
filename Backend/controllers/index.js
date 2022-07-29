const Attack = require("../models/Attacker");
const Defend = require("../models/Defender");

const { db } = require("mongodb");
const getAttacks = async (req, res) => {
  try {
    const getAttacks = await Attack.find({});
    console.log(getAttacks);
    return res.json({ getAttacks });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getDefense = async (req, res) => {
  try {
    const getDefend = await Defend.find({});
    console.log(getDefend);
    return res.json({ getDefend });
  } catch (error) {
    returnres.status(500).send(error.message);
  }
};

const getAttackById = async (req, res) => {
  console.log(Attack);
  try {
    const { id } = req.params;
    const selectedAttacks = await Attack.findById(id);
    return res.status(200).json({ selectedAttacks });
  } catch (error) {
    throw error;
  }
};

const getDefenseById = async (req, res) => {
  console.log(Defend);
  try {
    const { id } = req.params;
    const selectedDefense = await Defend.findById(id);
    return res.status(200).json({ selectedDefense });
  } catch (error) {
    throw error;
  }
};

const createAttack = async (req, res) => {
  try {
    //Senging a Request to our Route to perform a Function
    //headers (passwords, username, datatype)
    //body -> actual content of the request
    const missingAttacks = await new Attack(req.body);
    await missingAttacks.save();
    return res.status(201).json({
      missingAttacks,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createDefense = async (req, res) => {
  try {
    const missingDefense = await new Defend(req.body);
    await missingDefense.save();
    return res.status(201).json({
      missingDefense,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAttack = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedAttack = await Attack.findByIdAndUpdate({ _id: id }, req.body);
    res.send(updatedAttack);
  } catch (error) {
    console.log(error);
  }
};

const deleteAttack = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAttack = await Attack.findByIdAndDelete({ _id: id });
    res.send(deletedAttack);
  } catch (error) {
    console.log(error);
  }
};

const deleteDefense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDefend = await Defend.findByIdAndDelete({ _id: id });
    res.send(deletedDefend);
  } catch (error) {
    console.log(error);
  }
};

const toHit = async (req, res) => {
  try {
    let A2 = await Attack.find({});
    let A = A2[A2.length - 1];
    let B2 = await Defend.find({});
    let B = B2[B2.length - 1];
    let woundRoll = "";
    let semiProperBS = "";
    let semiProperSave = "";
    let semiInvSave = "";
    if (A.BS == 3) {
      semiProperBS = 4;
    } else if (A.BS == 2) {
      semiProperBS = 5;
    } else if (A.BS == 4) {
      semiProperBS = 3;
    } else if (A.BS == 5) {
      semiProperBS = 2;
    } else if (A.BS == 6) {
      semiProperBS = 1;
    }
    if (B.Save == 3) {
      semiProperSave = 2;
    } else if (B.Save == 2) {
      semiProperSave = 1;
    } else if (B.Save == 4) {
      semiProperSave = 3;
    } else if (B.Save == 5) {
      semiProperSave = 4;
    } else if (B.Save == 6) {
      semiProperSave = 5;
    }

    if (A.S > B.T) {
      woundRoll = 4 / 6;
    }
    if (A.S >= B.T * 2) {
      woundRoll = 5 / 6;
    }
    if (A.S === B.T) {
      woundRoll = 3 / 6;
    }
    if (A.S < B.T) {
      woundRoll = 2 / 6;
    }
    if (A.S * 2 <= B.T) {
      woundRoll = 1 / 6;
    }
    if (B.Inv_Save == 3) {
      semiInvSave = 2;
    } else if (B.Inv_Save == 2) {
      semiInvSave = 1;
    } else if (B.Inv_Save == 4) {
      semiInvSave = 3;
    } else if (B.Inv_Save == 5) {
      semiInvSave = 4;
    } else if (B.Inv_Save == 6) {
      semiInvSave = 5;
    }

    let properSave = semiProperSave / 6 + A.AP / 6;
    if (properSave >= 1) {
      properSave = 1;
    }

    let invSave = semiInvSave / 6;

    if (invSave >= properSave) {
      invSave = 1;
    }

    if (invSave == 0) {
      invSave = 1;
    }
    if (properSave > invSave) {
      properSave = 1;
    }
    let fnp = (B.FNP - 1) / 6;

    if (fnp <= 0) {
      fnp = 1;
    }
    let properBS = semiProperBS / 6;

    let woundDamage = A.Damage;
    const toHitRoll =
      A.Shots_Number *
      properBS *
      woundRoll *
      properSave *
      invSave *
      woundDamage *
      fnp;
    res.json(toHitRoll);
    console.log(
      A,
      B,
      A.S,
      B.T,
      A.Shots_Number,
      properBS,
      woundRoll,
      properSave,
      invSave,
      woundDamage,
      B.FNP,
      fnp,
      toHitRoll
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAttacks,
  getAttackById,
  createAttack,
  updateAttack,
  deleteAttack,
  getDefense,
  getDefenseById,
  createDefense,
  deleteDefense,
  toHit,
};
