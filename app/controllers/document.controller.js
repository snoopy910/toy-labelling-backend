const db = require("../models");
const Document = db.documents;
const Op = db.Sequelize.Op;

exports.findSome = (req, res) => {
  const offset = req.query.offset;
  const count = req.query.count;

  Document.findAll({
    offset: offset,
    limit: count,
    order: [["id", "ASC"]],
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

exports.findOne = (req, res) => {
  const id = req.params.id;

  Document.findOne({
    where: {
      id: id,
    },
  })
    .then((document) => {
      if (document) res.send(document);
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

exports.updateLabel = async (req, res) => {
  const id = req.params.id;
  Document.update(
    {
      label: req.body.labels,
    },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num.length === 1) {
        res.send({ message: "Label was updated successfully" });
      } else {
        res.send({ message: `Cannot update the label with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Label with id=" + id });
    });
};
