"use strict";
const DEFAULT_DOCUMENTS = module.require("../app/consts/documents");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "documents",
      [
        ...DEFAULT_DOCUMENTS.map((document) => ({
          ID: document.ID,
          title: document.title,
          body: document.body,
          URL: document.URL,
          label: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("documents", null, {});
  },
};
