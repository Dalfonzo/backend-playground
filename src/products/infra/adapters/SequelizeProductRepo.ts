import { IProductRepo } from '../../ports/out/productRepo';
import { CreateProductDTO } from '../../use-cases/create-product/createProductDTO';
import { Product } from '../../../shared/infra/database/sequelize/models/product.model';

export class SequelizeProductRepo implements IProductRepo {
  constructor() {}

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    const newProduct = await Product.create(product);
    return newProduct;
  }
}
