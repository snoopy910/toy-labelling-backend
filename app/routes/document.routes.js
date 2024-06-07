module.exports = (app) => {
  const version = process.env.VERSION;
  const documentControllers = require("../controllers/document.controller");
  var router = require("express").Router();

  /**
   * @swagger
   * /api/v1/documents:
   *   get:
   *     summary: Get list of documents
   *     description: Retrieve documents from the database.
   *     responses:
   *       200:
   *         description: Successful response with documents.
   */
  router.get("/", documentControllers.findSome);

  /**
   * @swagger
   * /api/v1/documents/length:
   *   get:
   *     summary: Get length of documents
   *     description: Retrieve length of documents from the database.
   *     responses:
   *       200:
   *         description: Successful response with length of documents.
   */
  router.get("/length", documentControllers.findLength);

  /**
   * @swagger
   * /api/v1/documents/{id}:
   *   get:
   *     summary: Get a document
   *     description: Retrieve document from the database.
   *     parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *          description: The id for certain document
   *     responses:
   *       200:
   *         description: Successful response with document for certain ID.
   */
  router.get("/:id", documentControllers.findOne);

  /**
   * @swagger
   * /api/v1/documents/{id}:
   *   put:
   *     summary: Update label for certain document
   *     description: Update label for document in the database.
   *     parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *          description: The id for certain document
   *     requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Labels'
   *     responses:
   *       201:
   *         description: Successful response
   *         content:
   *           application/json:
   *           schema:
   *              $ref: '#/components/schemas/Success'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *           schema:
   *              $ref: '#/components/schemas/Error'
   *
   * components:
   *  schemas:
   *    Labels:
   *      type: object
   *      required:
   *        - labels
   *      properties:
   *        labels:
   *          type: array
   *          items: string
   *          example: ['label1', 'label2', 'label3']
   *    Success:
   *      type: object
   *      required:
   *        - message
   *      properties:
   *        message:
   *          type: string
   *          example: Label was updated successfull y
   *    Error:
   *      type: object
   *      required:
   *        - message
   *      properties:
   *        message:
   *          type: string
   *          example: Can't update labels
   */
  router.put("/:id", documentControllers.updateLabel);

  app.use(`/api/${version}/documents`, router);
};
