const { Router } = require("express");
const { send } = require("process");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.get("/object", controllers.getAttacks);

router.get("/object/:id", controllers.getAttackById);

router.post("/object", controllers.createAttack);

router.put("/objects/:id", controllers.updateAttack);

// router.delete("objects/:id", controllers.deleteAttack);

module.exports = router;

//routes in Back end= creating routes
//routes in front end = navigating components on screen
