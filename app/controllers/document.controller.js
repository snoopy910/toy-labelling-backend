const db = require("../models");
const Document = db.documents;
const Op = db.Sequelize.Op;

exports.findSome = (req, res) => {
  const offset = req.query.offset;
  const count = req.query.count;

  Document.findAll({
    offset: offset,
    limit: count,
  })
    .then((documents) => {
      if (documents) res.send(documents);
      else {
        res.status(404).send({
          message: "Cannot find documents",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving documents" + err,
      });
    });
};
