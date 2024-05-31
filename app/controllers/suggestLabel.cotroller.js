const db = require("../models");
const Label = db.labels;

exports.findRandom = (req, res) => {
  Label.findAll({
    order: db.Sequelize.literal("RANDOM()"),
    limit: Math.floor(Math.random() * (5 - 3 + 1)) + 3,
    attributes: ["label"],
  })
    .then((labels) => {
      if (labels) res.send(labels);
      else {
        res.status(404).send({
          message: "Cannot find labels",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving labels" + err,
      });
    });
};
