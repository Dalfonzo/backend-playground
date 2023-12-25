import { GeneralErrors } from '../../../shared/core/GeneralErrors';
import { DeleteProductUseCase } from './deleteProductUseCase';
import { Response, Request } from 'express';

export class DeleteProductController {
  private deleteProductUseCase: DeleteProductUseCase;

  constructor(deleteProductUseCase: DeleteProductUseCase) {
    this.deleteProductUseCase = deleteProductUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    const id = req.params.id as string;

    try {
      const result = await this.deleteProductUseCase.execute({ id });

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
