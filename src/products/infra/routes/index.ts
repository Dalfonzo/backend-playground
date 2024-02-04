import express from 'express';
import { createProductController } from '../../use-cases/create-product';
import { readAllProductsController } from '../../use-cases/read-all-products';
import { deleteProductController } from '../../use-cases/delete-product';
import { readProductByIdController } from '../../use-cases/read-product-by-id';
import { updateProductController } from '../../use-cases/update-product';

const productsRouter = express.Router();

productsRouter
  /**
   * @openapi
   * /api/v1/products/:
   *   post:
   *      tags:
   *        - Products
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                  type: string
   *                price:
   *                  type: number
   *                brand:
   *                  type: string
   *      responses:
   *        201:
   *          description: OK
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  code:
   *                    type: number
   *                    example: 201
   *                  data:
   *                    type: object
   *                    $ref: "#/components/schemas/Products"
   */
  .post('/', (req, res) => createProductController.executeImplementation(req, res))
  /**
   * @openapi
   * /api/v1/products/:
   *   get:
   *     tags:
   *       - Products
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 code:
   *                   type: number
   *                   example: 200
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Products"
   */
  .get('/', (req, res) => readAllProductsController.executeImplementation(req, res))
  /**
   * @openapi
   * /api/v1/products/{id}:
   *   get:
   *     tags:
   *       - Products
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: id of the product
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 code:
   *                   type: number
   *                   example: 200
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: "#/components/schemas/Products"
   */
  .get('/:id', (req, res) => readProductByIdController.executeImplementation(req, res))
  /**
   * @openapi
   * /api/v1/products/{id}:
   *   patch:
   *      tags:
   *        - Products
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                  type: string
   *                price:
   *                  type: number
   *                brand:
   *                  type: string
   *      responses:
   *        201:
   *          description: OK
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  code:
   *                    type: number
   *                    example: 201
   *                  data:
   *                    type: object
   *                    $ref: "#/components/schemas/Products"
   */
  .patch('/:id', (req, res) => updateProductController.executeImplementation(req, res))
  /**
   * @openapi
   * /api/v1/products/{id}:
   *   delete:
   *     tags:
   *       - Products
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: id of the product
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 code:
   *                   type: number
   *                   example: 200
   */
  .delete('/:id', (req, res) => deleteProductController.executeImplementation(req, res));

export { productsRouter };
