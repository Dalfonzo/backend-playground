import { CreateProductDTO } from '../../use-cases/create-product/createProductDTO';

export interface IProductRepo {
  create(product: CreateProductDTO): Promise<CreateProductDTO>;
}
