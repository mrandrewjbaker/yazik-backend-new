import express from 'express';
import path from 'path';
const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
// api.use(cookieParser());
api.use(express.static(path.join(__dirname, 'public')));

const v1Router = require('./router/index');
api.use('/v1', v1Router);

api.use((req, res, next) => {
  next(res.sendStatus(404));
});

export default api;

module.exports = api;