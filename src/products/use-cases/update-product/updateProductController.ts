import { UpdateProductUseCase } from './updateProductUseCase';
import { Response, Request } from 'express';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';

export class UpdateProductController {
  private updateProductUseCase: UpdateProductUseCase;

  constructor(updateProductUseCase: UpdateProductUseCase) {
    this.updateProductUseCase = updateProductUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    const id = req.params.id as string;
    try {
      const result = await this.updateProductUseCase.execute({ id, ...req.body });

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
