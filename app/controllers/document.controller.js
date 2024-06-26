const db = require("../models");
const Document = db.documents;

exports.findLength = (req, res) => {
  Document.count()
    .then((count) => {
      let response = { count: count };
      if (count) res.send(response);
      else {
        res.status(404).send({
          message: "Cannot get count of documents",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving count of documents " + err,
      });
    });
};

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
        res.status(201).send({ message: "Label was updated successfully" });
      } else {
        res
          .status(400)
          .send({ message: `Cannot update the label with id=${id}` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Label with id=" + id });
    });
};
