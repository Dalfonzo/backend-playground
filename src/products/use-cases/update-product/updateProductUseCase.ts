import { IProductRepo } from '../../ports/out/productRepo';
import { UpdateProductDTO } from './updateProductDTO';

export class UpdateProductUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: UpdateProductDTO) {
    // Validations: Check if we are going to use some Either|Result class
    return await this.productRepo.update(dto);
  }
}
