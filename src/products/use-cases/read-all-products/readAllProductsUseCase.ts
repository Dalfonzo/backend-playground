import { IProductRepo } from '../../ports/out/productRepo';

export class ReadAllProductsUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute() {
    // Validations: Check if we are going to use some Either|Result class
    return await this.productRepo.readAll();
  }
}
