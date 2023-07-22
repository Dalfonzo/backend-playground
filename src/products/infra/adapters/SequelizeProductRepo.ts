import { IProductRepo } from '../../ports/out/productRepo';
import { CreateProductDTO } from '../../use-cases/create-product/createProductDTO';

export class SequelizeProductRepo implements IProductRepo {
  constructor() {}

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    // TODO: Change this
    return Promise.resolve(product);
  }
}
