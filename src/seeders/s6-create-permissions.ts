import { QueryInterface } from 'sequelize';
import { IPermissionProperties } from '../models/permissions';


const uuid = require('uuid');


export const seedPermissions: IPermissionProperties[] = [
  {
    id: uuid.v4(),
    name: 'YAZIK_ADMIN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    name: 'YAZIK_USER',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('permissions',[...seedPermissions]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('permissions', {}, {});
  }
};