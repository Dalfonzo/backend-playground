import express from 'express';
import { createProductController } from '../../use-cases/create-product';

const productsRouter = express.Router();

productsRouter.post('/', (req, res) => createProductController.executeImplementation(req, res));

export { productsRouter };
