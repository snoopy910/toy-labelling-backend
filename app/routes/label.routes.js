module.exports = (app) => {
  const version = process.env.VERSION;
  const labelControllers = require("../controllers/suggestLabel.cotroller");
  var router = require("express").Router();

  router.get("/", labelControllers.findRandom);

  app.use(`/api/${version}/labels`, router);
};
