import { QueryInterface } from 'sequelize';
import { IUserLearnedVocabularyProperties } from '../models/userLearnedVocabulary';

import { seedUsers } from './s1-create-users';
import { seedLanguages } from './s2-create-languages';

const uuid = require('uuid');


export const seedUserLearnedVocabulary: IUserLearnedVocabularyProperties[] = [
  {
    id: uuid.v4(),
    userId: seedUsers[1].id,
    languageId: seedLanguages[0].id,
    listeningVocabulary: [],
    readingVocabulary: [],
    speakingVocabulary: [],
    writingVocabulary: [],
    createdAt: new Date(),
    updatedAt: new Date(), 
  },
];

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('userLearnedVocabulary',[...seedUserLearnedVocabulary]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('userLearnedVocabulary', {}, {});
  }
};