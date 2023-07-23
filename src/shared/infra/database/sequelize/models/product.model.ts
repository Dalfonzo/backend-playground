import { DataType, Table, Model, Column, PrimaryKey } from 'sequelize-typescript';
import { CreateProductDTO } from '../../../../../products/use-cases/create-product/createProductDTO';
import { Optional } from 'sequelize';

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
