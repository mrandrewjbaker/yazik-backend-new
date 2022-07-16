import {
  Model
} from 'sequelize';

interface IUserProperties {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class user extends Model<IUserProperties>
  implements IUserProperties{
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
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
    sequelize,
    modelName: 'user'
  });
  return user;
}