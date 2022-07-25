const Attack = require("../models/Attacker");
const { db } = require("mongodb");
const getAttacks = async (req, res) => {
  console.log("banana");
  try {
    const getAttacks = await Attack.find({});
    console.log(getAttacks);
    return res.json({ getAttacks });
    //interchangeable with above
    // res.send(objects);
  } catch (error) {
    //status 200 means worked
    return res.status(500).send(error.mssage);
    //interchangeable with above
    // throw error;
  }
};

//creating Details / Show route
const getAttackById = async (req, res) => {
  console.log(Attack);
  try {
    const { id } = req.params;
    const selectedAttacks = await Attack.findById(req.params.id);
    return res.status(200).json({ selectedAttacks });
    // res.send(object);
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

// update an existing object

const updateAttack = async (req, res) => {
  try {
    //making sure have right opbject
    const objectId = req.params.objectId;
    //creating a new object that is being updated via the body of the request

    const updatedAttack = await Attack.update(req.body, {
      //targeting object by id
      where: { id: objectId },
      //sending back the updated version
      returning: true,
    });
    res.send(updatedAttack);
  } catch (error) {
    throw error;
  }
};

// const deleteAttack = async (req, res) => {
//   try {
//     // make sure we are targeting the correct object
//     const attackId = req.params.attackId;
//     //how to destroy bojects
//     await Attack.destroy({ where: { id: attackId } });

//     //success message
//     res.send({ msg: `Object with ID ${attackId} deleted` });
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = {
  getAttacks,
  getAttackById,
  createAttack,
  updateAttack,
  //   deleteAttack,
};
