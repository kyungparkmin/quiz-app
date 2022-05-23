module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'Quiz',
    {
      question: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      data_1 :{
        type : DataTypes.STRING(70),
        allowNull: false,
      },
      answer_1 : {
        type : DataTypes.ENUM('T', 'F'),
        defaultValue : 'F',
      },
      data_2 : {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
      answer_2 : {
        type : DataTypes.ENUM('T', 'F'),
        defaultValue : 'F',
      },
      data_3 : {
        type : DataTypes.STRING(70),
        allowNull: false,
      },
      answer_3 : {
        type : DataTypes.ENUM('T', 'F'),
        defaultValue : 'F',
      },
      data_4 : {
        type : DataTypes.STRING(70),
        allowNull: false,
      },
      answer_4 : {
        type : DataTypes.ENUM('T', 'F'),
        defaultValue : 'F',
      },
    },
    {
      timestamps: true,
      paranoid: true,
      modelName: 'Quiz',
      tableName: 'quiz',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );