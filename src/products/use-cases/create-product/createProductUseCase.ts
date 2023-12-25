import { IProductRepo } from '../../ports/out/productRepo';
import { CreateProductDTO } from './createProductDTO';
import { Result } from '../../../shared/core/Result';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';
import { Product } from '../../domain/Product';

export class CreateProductUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: CreateProductDTO) {
    try {
      if (!dto.name || !dto.price || !dto.brand) {
        return Result.fail(new GeneralErrors().BadRequest());
      }

      const productOrError = Product.create(dto);

      if (productOrError.isSuccess) {
        const product = await this.productRepo.create(dto);
        return Result.ok(product);
      }

      return Result.fail({ message: productOrError.getError() as string });
    } catch (error) {
      return Result.fail(new GeneralErrors().InternalServerError());
    }
  }
}
