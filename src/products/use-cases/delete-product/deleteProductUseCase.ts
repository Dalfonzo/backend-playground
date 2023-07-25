import { IProductRepo } from '../../ports/out/productRepo';
import { DeleteProductDTO } from './deleteProductDTO';

export class DeleteProductUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: DeleteProductDTO) {
    return await this.productRepo.delete(dto);
  }
}
