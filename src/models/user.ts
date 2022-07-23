import {
  Model, DataTypes, Optional,
} from 'sequelize';


import { sequelizeResource } from '../resources/resource.sequelize';

import bcrypt from 'bcrypt';


export interface IUserProperties {
  id: string;
  email: string;
  username: string;
  password: string;
  enrolledLanguages: string[] | null;
  createdAt?: Date; 
  updatedAt?: Date;
}

export interface IUserPropertiesCreate extends Optional<IUserProperties, 'id'> {}

  class user extends Model<IUserProperties, IUserPropertiesCreate>
  implements IUserProperties{
    declare id: string;
    declare email: string;
    declare username: string;
    declare password: string;
    declare enrolledLanguages: string[] | null;
    static associate(models: any){
      
    }
  };
  user.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enrolledLanguages: {
      type: DataTypes.JSON
    }
  },{
    sequelize: sequelizeResource,
    modelName: 'user'
  });
  export default user;

  const userAuthRegisterModelFunction = async (email: string, username: string, password: string) => {
    const saltedPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltedPassword);

    const userAuthRegisterResult = await user.create({
      email: email,
      username: username,
      password: hashedPassword,
      enrolledLanguages: []
    });
    return userAuthRegisterResult;
  }

  const userAuthLoginModelFunction = async (username: string, password: string) => {
    let userAuthLoginResult = await user.findOne({
      where: {
        username: username
      },
    });
    if (!userAuthLoginResult) {
      return null;
    }
    const isValid = await bcrypt.compare(password, userAuthLoginResult.password);
    if (!isValid) {
      return null;
    }

    const userAuthLoginResultCleaned = {
      id: userAuthLoginResult.id,
      username: userAuthLoginResult.username,
      email: userAuthLoginResult.email,
      enrolledLanguages: userAuthLoginResult.enrolledLanguages
    }
    return userAuthLoginResultCleaned;
  }

  export { 
    userAuthRegisterModelFunction,
    userAuthLoginModelFunction
  };