module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define("document", {
    title: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    label: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
  });
  return Document;
};
