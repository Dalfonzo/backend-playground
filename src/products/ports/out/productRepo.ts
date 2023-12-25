import { CreateProductDTO } from '../../use-cases/create-product/createProductDTO';
import { DeleteProductDTO } from '../../use-cases/delete-product/deleteProductDTO';
import { ReadProductByIdDTO } from '../../use-cases/read-product-by-id/readProductByIdDTO';
import { UpdateProductDTO } from '../../use-cases/update-product/updateProductDTO';

export interface IProductRepo {
  create(product: CreateProductDTO): Promise<CreateProductDTO>;
  readAll(): Promise<CreateProductDTO[]>;
  readById(id: ReadProductByIdDTO): Promise<CreateProductDTO | null>;
  update(id: UpdateProductDTO): Promise<CreateProductDTO>;
  delete(id: DeleteProductDTO): Promise<DeleteProductDTO>;
}
