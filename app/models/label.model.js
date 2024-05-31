module.exports = (sequelize, Sequelize) => {
  const Label = sequelize.define("label", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    label: {
      type: Sequelize.TEXT,
    },
  });
  return Label;
};
