import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';

export interface IUserLearnedVocabularyProperties {
  id: string;
  userId: string;
  languageId: string;
  listeningVocabulary: string[];
  readingVocabulary: string[];
  speakingVocabulary: string[];
  writingVocabulary: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserLearnedVocabularyPropertiesCreate extends Optional<IUserLearnedVocabularyProperties, 'id'> {}

  class userLearnedVocabulary extends Model<IUserLearnedVocabularyProperties, IUserLearnedVocabularyPropertiesCreate>
  implements IUserLearnedVocabularyProperties{
    declare id: string;
    declare userId: string;
    declare languageId: string;
    declare listeningVocabulary: string[];
    declare readingVocabulary: string[];
    declare speakingVocabulary: string[];
    declare writingVocabulary: string[];
    static associate(models: any){
      
    }
  };
  userLearnedVocabulary.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languageId: {
      type: DataTypes.STRING,
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

  },{
    sequelize: sequelizeResource,
    modelName: 'userLearnedVocabulary'
  });
  export default userLearnedVocabulary;

  const userLearnedVocabularyCreateModelFunction = async (userId: string, languageId: string) => {
    const userLearnedVocabularyResult = await userLearnedVocabulary.create({
      userId: userId,
      languageId: languageId,
      listeningVocabulary: [],
      readingVocabulary: [],
      speakingVocabulary: [],
      writingVocabulary: [],
    });
    return userLearnedVocabularyResult;
  }

  export {
    userLearnedVocabularyCreateModelFunction,
  };