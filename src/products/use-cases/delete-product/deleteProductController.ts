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
      // TODO: Change this
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
