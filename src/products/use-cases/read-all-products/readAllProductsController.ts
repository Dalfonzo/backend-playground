import { Response, Request } from 'express';
import { ReadAllProductsUseCase } from './readAllProductsUseCase';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';

export class ReadAllProductsController {
  private readAllProductsUseCase: ReadAllProductsUseCase;

  constructor(readAllProductsUseCase: ReadAllProductsUseCase) {
    this.readAllProductsUseCase = readAllProductsUseCase;
  }

  async executeImplementation(_req: Request, res: Response) {
    try {
      const result = await this.readAllProductsUseCase.execute();

      if (result.isSuccess) {
        return res.status(200).json({ code: 200, data: result.getValue() });
      }

      return res.status(result.getCode()).json({ message: result.getError(), code: result.getCode() });
    } catch (error) {
      const { code, message } = new GeneralErrors().InternalServerError();
      return res.status(code).json({ code, message });
    }
  }
}
