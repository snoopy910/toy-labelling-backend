require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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
  res.json({ message: "Welcome to toy labelling bilby" });
});

require("./app/routes/document.routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
