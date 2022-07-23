import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

export interface ITopicProperties {
  id: string;
  name: string;
  languageId: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface ITopicPropertiesCreate extends Optional<ITopicProperties, 'id'> {}

  class topic extends Model<ITopicProperties, ITopicPropertiesCreate>
  implements ITopicProperties{
    declare id: string;
    declare name: string;
    declare languageId: string;
    static associate(models: any){
      
    }
  };
  topic.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languageId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  },{
    sequelize: sequelizeResource,
    modelName: 'topic'
  });
  export default topic;

  const topicCreateModelFunction = async (name: string, languageId: string) => {
    const topicCreateResult = await topic.create({
      name,
      languageId,
    });
    return topicCreateResult;
  }

  export { 
    topicCreateModelFunction
  };