const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db" + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to toy labelling bilby" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
