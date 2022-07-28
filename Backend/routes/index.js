const { Router } = require("express");
const { send } = require("process");
const controllers = require("../controllers");
const router = Router();
// const cors = require("cors");
// app.use(
//   cors({
//     methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
//   })
// );
// var express = require("express");
// var cors = require("cors");
// var app = express();

// app.use(cors());

// app.get("/object", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

// app.listen(80, function () {
//   console.log("CORS-enabled web server listening on port 80");
// });

router.get("/", (req, res) => res.send("This is root!"));

router.get("/object", controllers.getAttacks);

router.get("/defense", controllers.getDefense);

router.get("/defense/:id", controllers.getDefenseById);

router.get("/object/:id", controllers.getAttackById);

router.post("/object", controllers.createAttack);

router.post("/defense", controllers.createDefense);

router.put("/object/:id", controllers.updateAttack);
// (req, res) =>
router.delete("/object/:id", controllers.deleteAttack);

router.delete("/object/:id", controllers.deleteDefense);

router.get("/solution", controllers.toHit);

module.exports = router;

//routes in Back end= creating routes
//routes in front end = navigating components on screen
