import { QueryInterface } from 'sequelize';
import { ITopicProperties } from '../models/topic';

import { seedLanguages } from './s2-create-languages';

const uuid = require('uuid');


export const seedTopics: ITopicProperties[] = [
  {
    id: uuid.v4(),
    name: 'Hello Baby',
    languageId: seedLanguages[0].id,
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
  {
    id: uuid.v4(),
    name: 'Hello Family',
    languageId: seedLanguages[0].id,
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
];

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('topics',[...seedTopics]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('topics', {}, {});
  }
};