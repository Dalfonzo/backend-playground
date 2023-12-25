import { IProductRepo } from '../../ports/out/productRepo';
import { ReadProductByIdDTO } from './readProductByIdDTO';
import { Result } from '../../../shared/core/Result';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';

export class ReadProductByIdUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: ReadProductByIdDTO) {
    try {
      if (!dto.id) {
        return Result.fail(new GeneralErrors().BadRequest());
      }

      const product = await this.productRepo.readById(dto);

      if (!product) {
        return Result.fail(new GeneralErrors().NotFound());
      }

      return Result.ok(product);
    } catch (error) {
      return Result.fail(new GeneralErrors().InternalServerError());
    }
  }
}
