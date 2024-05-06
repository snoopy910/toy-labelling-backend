module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define("document", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.TEXT,
    },
    body: {
      type: Sequelize.TEXT,
    },
    url: {
      type: Sequelize.TEXT,
    },
    label: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
  });
  return Document;
};
