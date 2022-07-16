import db from './models';

db.sequelize.sync({ force: true })
.then(() => {
  console.log('Database connected successfully');
})
.catch((err: any) => {
  console.log(err);
});
