import { IProductRepo } from '../../ports/out/productRepo';
import { ReadProductByIdDTO } from './readProductByIdDTO';

export class ReadProductByIdUseCase {
  private productRepo: IProductRepo;

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo;
  }

  async execute(dto: ReadProductByIdDTO) {
    return await this.productRepo.readById(dto);
  }
}
