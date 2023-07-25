import { ReadProductByIdUseCase } from './readProductByIdUseCase';
import { Response, Request } from 'express';

export class ReadProductByIdController {
  private readProductByIdUseCase: ReadProductByIdUseCase;

  constructor(readProductByIdUseCase: ReadProductByIdUseCase) {
    this.readProductByIdUseCase = readProductByIdUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    const id = req.params.id as string;
    try {
      const result = await this.readProductByIdUseCase.execute({ id });
      // TODO: Change this
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
