import express from 'express';
import { createProductController } from '../../use-cases/create-product';
import { readAllProductsController } from '../../use-cases/read-all-products';
import { deleteProductController } from '../../use-cases/delete-product';
import { readProductByIdController } from '../../use-cases/read-product-by-id';
import { updateProductController } from '../../use-cases/update-product';

const productsRouter = express.Router();

productsRouter
  .post('/', (req, res) => createProductController.executeImplementation(req, res))
  .get('/', (req, res) => readAllProductsController.executeImplementation(req, res))
  .get('/:id', (req, res) => readProductByIdController.executeImplementation(req, res))
  .patch('/:id', (req, res) => updateProductController.executeImplementation(req, res))
  .delete('/:id', (req, res) => deleteProductController.executeImplementation(req, res));

export { productsRouter };
