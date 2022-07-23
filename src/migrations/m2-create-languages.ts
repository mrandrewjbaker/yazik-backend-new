import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.createTable('languages', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async(queryInterface: QueryInterface) => {
    await queryInterface.dropTable('languages');
  }
};