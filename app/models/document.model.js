module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define("document", {
    ID: {
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.TEXT,
    },
    body: {
      type: Sequelize.TEXT,
    },
    URL: {
      type: Sequelize.TEXT,
    },
    label: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
  });
  return Document;
};
