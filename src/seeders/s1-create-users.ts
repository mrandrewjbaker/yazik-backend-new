import { QueryInterface } from 'sequelize';
import { IUserProperties } from '../models/user';

const uuid = require('uuid');


export const seedUsers: IUserProperties[] = [
  {
    id: uuid.v4(),
    username: 'yazikAdmin',
    email: 'yazikAdmin@yazik.com',
    password: '$2b$10$bBDtyWu3wPVTYvr.OO4dheGlXx26ofc1CR7m3lnWFNBwmqHKtQ5Km',
    enrolledLanguages: null,
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  {
    id: uuid.v4(),
    username: 'mrandrewjbaker',
    email: 'mrandrewjbaker@gmail.com',
    password: '$2b$10$bBDtyWu3wPVTYvr.OO4dheGlXx26ofc1CR7m3lnWFNBwmqHKtQ5Km',
    enrolledLanguages: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('users',[...seedUsers]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('users', {}, {});
  }
};