module.exports = (app) => {
  const documentControllers = require("../controllers/document.controller");
  var router = require("express").Router();

  router.get("/", documentControllers.findSome);

  app.use("/api/v1/documents", router);
};
