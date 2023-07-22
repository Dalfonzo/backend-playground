import { CreateProductDTO } from './createProductDTO';
import { CreateProductUseCase } from './createProductUseCase';
import { Response, Request } from 'express';

export class CreateProductController {
  private createProductUseCase: CreateProductUseCase;

  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    const dto: CreateProductDTO = req.body;
    try {
      const result = await this.createProductUseCase.execute(dto);
      // TODO: Change this
      console.log({ result, dto });
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
