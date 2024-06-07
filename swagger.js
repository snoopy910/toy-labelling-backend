const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Toy Document Labeling",
      version: "1.0.0",
      description: "API documentation for TDL",
    },
  },
  apis: ["./app/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
