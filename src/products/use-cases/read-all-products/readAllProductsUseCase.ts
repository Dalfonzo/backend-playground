import { GeneralErrors } from '../../../shared/core/GeneralErrors';
import { Result } from '../../../shared/core/Result';
import { IProductRepo } from '../../ports/out/productRepo';

export class ReadAllProductsUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute() {
    try {
      const products = await this.productRepo.readAll();
      return Result.ok(products);
    } catch (error) {
      return Result.fail(new GeneralErrors().InternalServerError());
    }
  }
}
