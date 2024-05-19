module.exports = (app) => {
  const version = process.env.VERSION;
  const documentControllers = require("../controllers/document.controller");
  var router = require("express").Router();

  router.get("/", documentControllers.findSome);
  router.get("/:id", documentControllers.findOne);
  router.put("/:id", documentControllers.updateLabel);

  app.use(`/api/${version}/documents`, router);
};
