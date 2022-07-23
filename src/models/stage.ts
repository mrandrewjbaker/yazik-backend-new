import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

export interface IStageProperties {
  id: string;
  topicId: string;
  stageNumber: number;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IStagePropertiesCreate extends Optional<IStageProperties, 'id'> {}

  class stage extends Model<IStageProperties, IStagePropertiesCreate>
  implements IStageProperties{
    declare id: string;
    declare topicId: string;
    declare stageNumber: number;
    static associate(models: any){
      
    }
  };
  stage.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    topicId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    stageNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    sequelize: sequelizeResource,
    modelName: 'stage'
  });
  export default stage;
  