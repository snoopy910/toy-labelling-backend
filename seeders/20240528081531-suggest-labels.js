"use strict";
const SUGGEST_LABELS = module.require("../app/consts/labels");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "labels",
      [
        ...SUGGEST_LABELS.map((label) => ({
          label: label,
          createdAt: new Date(),
          updatedAt: new Date(),
        })),
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("labels", null, {});
  },
};
