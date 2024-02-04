import { DataType, Table, Model, Column, PrimaryKey } from 'sequelize-typescript';
import { CreateProductDTO } from '../../../../../products/use-cases/create-product/createProductDTO';
import { Optional } from 'sequelize';

/**
 * @openapi
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: Intelligent Wooden Chips
 *         price:
 *           type: number
 *           example: 300
 *         brand:
 *           type: string
 *           example:  Reichert - Terry
 *         createdAt:
 *           type: string
 *           example: 2023-12-25T22:04:02.624Z
 *         updatedAt:
 *           type: string
 *           example: 2023-12-25T22:04:02.624Z
 *
 */

@Table
export class Product extends Model<CreateProductDTO, Optional<CreateProductDTO, 'id'>> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  brand!: string;
}
