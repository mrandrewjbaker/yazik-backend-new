import {
  Model, DataTypes, Optional,
} from 'sequelize';
import { sequelizeResource } from '../resources/resource.sequelize';



export interface ILanguageProperties {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILanguagePropertiesCreate extends Optional<ILanguageProperties, 'id'> {}

  class language extends Model<ILanguageProperties, ILanguagePropertiesCreate>
  implements ILanguageProperties{
    declare id: string;
    declare name: string;
    static associate(models: any){
      
    }
  };
  language.init({
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },{
    sequelize: sequelizeResource,
    modelName: 'language'
  });
  export default language;

  const languageCreateModelFunction = async (name: string) => {
    const languageCreateResult = await language.create({
      name: name,
    });
    return languageCreateResult;
  }

  export {
    languageCreateModelFunction,
  };