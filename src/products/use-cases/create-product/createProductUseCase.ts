import { IProductRepo } from '../../ports/out/productRepo';
import { CreateProductDTO } from './createProductDTO';

export class CreateProductUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: CreateProductDTO) {
    // Validations: Check if we are going to use some Either|Result class

    const product = await this.productRepo.create(dto);
    console.log({ product, dto });
    return product;
  }
}
