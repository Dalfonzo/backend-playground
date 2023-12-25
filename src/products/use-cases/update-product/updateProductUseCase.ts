import { IProductRepo } from '../../ports/out/productRepo';
import { UpdateProductDTO } from './updateProductDTO';
import { Result } from '../../../shared/core/Result';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';
import { Product } from '../../domain/Product';

export class UpdateProductUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: UpdateProductDTO) {
    try {
      if (!dto.id) {
        return Result.fail(new GeneralErrors().BadRequest());
      }

      const product = await this.productRepo.readById({ id: dto.id });

      if (!product) {
        return Result.fail(new GeneralErrors().NotFound());
      }

      const productOrError = Product.create(dto);

      if (productOrError.isSuccess) {
        const product = await this.productRepo.update(dto);
        return Result.ok(product);
      }

      return Result.fail({ message: productOrError.getError() as string, code: productOrError.getCode() });
    } catch (error) {
      return Result.fail(new GeneralErrors().InternalServerError());
    }
  }
}
