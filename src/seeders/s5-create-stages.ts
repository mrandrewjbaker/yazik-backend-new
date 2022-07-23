import { QueryInterface } from 'sequelize';
import { IStageProperties } from '../models/stage';
import { seedTopics } from './s4-create-topics';


const uuid = require('uuid');


export const seedStages: IStageProperties[] = [
  {
    id: uuid.v4(),
    topicId: seedTopics[0].id,
    stageNumber: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    topicId: seedTopics[0].id,
    stageNumber: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    topicId: seedTopics[1].id,
    stageNumber: 1,
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