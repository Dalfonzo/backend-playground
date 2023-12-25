import { ReadProductByIdUseCase } from './readProductByIdUseCase';
import { Response, Request } from 'express';
import { GeneralErrors } from '../../../shared/core/GeneralErrors';

export class ReadProductByIdController {
  private readProductByIdUseCase: ReadProductByIdUseCase;

  constructor(readProductByIdUseCase: ReadProductByIdUseCase) {
    this.readProductByIdUseCase = readProductByIdUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    const id = req.params?.id || '';

    try {
      const result = await this.readProductByIdUseCase.execute({ id });

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
