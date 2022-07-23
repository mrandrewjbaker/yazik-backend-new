import { QueryInterface } from 'sequelize';
import { IUserPermissionsProperties } from '../models/userPermissions';
import { seedUsers } from './s1-create-users';
import { seedPermissions } from './s6-create-permissions';


const uuid = require('uuid');


export const seedUserPermissions: IUserPermissionsProperties[] = [
  {
    id: uuid.v4(),
    userId: seedUsers[1].id,
    permissionId: seedPermissions[0].id,
  },
  {
    id: uuid.v4(),
    userId: seedUsers[1].id,
    permissionId: seedPermissions[1].id,
  },
];

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('userPermissions',[...seedUserPermissions]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('userPermissions', {}, {});
  }
};