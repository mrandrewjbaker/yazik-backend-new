import express from 'express';

const api = express();
const port = process.env.PORT || 3000;

import db from './models';

db.sequelize.sync()
.then(() => {
  console.log('Database connected successfully');
  api.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch((err: any) => {
  console.log(err);
});