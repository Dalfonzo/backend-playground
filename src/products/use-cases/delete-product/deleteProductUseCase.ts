import { IProductRepo } from '../../ports/out/productRepo';
import { DeleteProductDTO } from './deleteProductDTO';
import { Result } from '../../../shared/core/Result';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';

export class DeleteProductUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: DeleteProductDTO) {
    try {
      if (!dto.id) {
        return Result.fail(new GeneralErrors().BadRequest());
      }

      const product = await this.productRepo.readById(dto);

      if (!product) {
        return Result.fail(new GeneralErrors().NotFound());
      }

      await this.productRepo.delete(dto);

      return Result.ok(dto);
    } catch (error) {
      return Result.fail(new GeneralErrors().InternalServerError());
    }
  }
}
