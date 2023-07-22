import express from 'express';
import { v1Router } from './api/v1';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', v1Router);

app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on port 3000');
});
