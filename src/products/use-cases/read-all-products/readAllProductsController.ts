import { Response, Request } from 'express';
import { ReadAllProductsUseCase } from './readAllProductsUseCase';

export class ReadAllProductsController {
  private readAllProductsUseCase: ReadAllProductsUseCase;

  constructor(readAllProductsUseCase: ReadAllProductsUseCase) {
    this.readAllProductsUseCase = readAllProductsUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    try {
      const result = await this.readAllProductsUseCase.execute();
      // TODO: Change this
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
