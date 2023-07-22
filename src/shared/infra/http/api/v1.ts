import express from 'express';
import { productsRouter } from '../../../../products/infra/routes';

const router = express.Router();

router.get('/', function (req, res) {
  res.json({ message: 'Hello World' });
});

router.use('/products', productsRouter);

export { router as v1Router };
