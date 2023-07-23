import 'dotenv/config';
import express from 'express';
import { v1Router } from './api/v1';
import bodyParser from 'body-parser';
import { sequelize } from '../database/sequelize';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', v1Router);
sequelize
  .sync({})
  .then(() => {
    console.log('Sequelize initialized');
  })
  .catch((e) => console.error('There was an error with Sequelize:', e));
app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on port 3000');
});
