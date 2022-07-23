import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

export interface IUserPermissionsProperties {
  id: string;
  userId: string;
  permissionId: string;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IUserPermissionsPropertiesCreate extends Optional<IUserPermissionsProperties, 'id'> {}

  class userPermission extends Model<IUserPermissionsProperties, IUserPermissionsPropertiesCreate>
  implements IUserPermissionsProperties{
    declare id: string;
    declare userId: string;
    declare permissionId: string;
    static associate(models: any){
      
    }
  };
  userPermission.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    permissionId: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  },{
    sequelize: sequelizeResource,
    modelName: 'userPermission'
  });
  export default userPermission;
  