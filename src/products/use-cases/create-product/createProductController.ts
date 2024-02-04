import { GeneralErrors } from '../../../shared/core/GeneralErrors';
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

      if (result.isSuccess) {
        return res.status(201).json({ code: 201, data: result.getValue() });
      }
      return res.status(result.getCode()).json({ message: result.getError(), code: result.getCode() });
    } catch (error) {
      const { code, message } = new GeneralErrors().InternalServerError();
      return res.status(code).json({ code, message });
    }
  }
}
