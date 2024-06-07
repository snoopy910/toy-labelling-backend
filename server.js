require("dotenv").config();
const express = require("express");
const cors = require("cors");
const os = require("os");
// const fetch = require("node-fetch");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db " + err.message);
  });

app.get("/", (req, res) => {
  // res.json({ message: "Welcome to toy labelling bilby" });
  res.json(`Hello from the ${os.hostname()}`);
});

app.get("/nginx", async (req, res) => {
  const url = "http://nginx";
  const response = await fetch(url);
  const body = await response.text(response);
  res.send(body);
});

require("./app/routes/document.routes")(app);
require("./app/routes/label.routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
