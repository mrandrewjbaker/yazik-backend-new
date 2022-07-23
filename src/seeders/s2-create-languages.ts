import { QueryInterface, UUID } from 'sequelize';
import { ILanguageProperties } from '../models/language';

const uuid = require('uuid');


export const seedLanguages: ILanguageProperties[] = [
  {
    id: uuid.v4(),
    name: 'English',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    name: 'French',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    name: 'German',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    name: 'Mandarin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    name: 'Russian',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    name: 'Spanish',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('languages',[...seedLanguages]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('languages', {}, {});
  }
};