import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.createTable('userLearnedVocabulary', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      listeningVocabulary: {
        type: DataTypes.JSON,
        allowNull: false
      },
      readingVocabulary: {
        type: DataTypes.JSON,
        allowNull: false
      },
      speakingVocabulary: {
        type: DataTypes.JSON,
        allowNull: false
      },
      writingVocabulary: {
        type: DataTypes.JSON,
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
    await queryInterface.dropTable('users');
  }
};