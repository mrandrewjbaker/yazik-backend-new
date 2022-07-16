import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';

import bcrypt from 'bcrypt';


interface IUserProperties {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserPropertiesCreate extends Optional<IUserProperties, 'id'> {}

  class user extends Model<IUserProperties, IUserPropertiesCreate>
  implements IUserProperties{
    declare id: number;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    static associate(models: any){
      
    }
  };
  user.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    sequelize: sequelizeResource,
    modelName: 'user'
  });
  export default user;

  const userAuthRegister = async (email: string, password: string) => {
    const result = await user.create({
      firstName: '',
      lastName: '',
      email: email,
      password: password
    });
    return result;
  }

  export { 
    userAuthRegister
  };