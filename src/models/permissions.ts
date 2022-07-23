import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

export interface IPermissionProperties {
  id: string;
  name: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IPermissionPropertiesCreate extends Optional<IPermissionProperties, 'id'> {}

  class permission extends Model<IPermissionProperties, IPermissionPropertiesCreate>
  implements IPermissionProperties{
    declare id: string;
    declare name: string;
    static associate(models: any){
      
    }
  };
  permission.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },{
    sequelize: sequelizeResource,
    modelName: 'permission'
  });
  export default permission;
  