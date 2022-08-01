const express = require("express");
const routes = require("./routes");
const db = require("./db");
const cors = require("cors");
const controllers = require("./controllers");
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3003;

const app = express();

const logger = require("morgan");
app.use(logger("dev"));
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

app.use(express.json());
app.use(express.static(`${__dirname}/client/build`));

// app.use() middleware here ^ ///////////////////
app.get("/attack", controllers.getAttacks);

app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
