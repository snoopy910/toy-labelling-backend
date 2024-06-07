module.exports = (app) => {
  const version = process.env.VERSION;
  const labelControllers = require("../controllers/suggestLabel.cotroller");
  var router = require("express").Router();

  /**
   * @swagger
   * /api/v1/labels:
   *   get:
   *     summary: Get random labels
   *     description: Retrieve labels randomly from the database.
   *     responses:
   *       200:
   *         description: Successful response with labels.
   */
  router.get("/", labelControllers.findRandom);

  app.use(`/api/${version}/labels`, router);
};
