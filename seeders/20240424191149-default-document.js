"use strict";
const DEFAULT_DOCUMENTS = module.require("../app/consts/documents");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "documents",
      [
        ...DEFAULT_DOCUMENTS.map((document) => ({
          id: document.id,
          title: document.title,
          body: document.body,
          url: document.url,
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
