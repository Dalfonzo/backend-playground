import { UpdateProductUseCase } from './updateProductUseCase';
import { Response, Request } from 'express';

export class UpdateProductController {
  private updateProductUseCase: UpdateProductUseCase;

  constructor(updateProductUseCase: UpdateProductUseCase) {
    this.updateProductUseCase = updateProductUseCase;
  }

  async executeImplementation(req: Request, res: Response) {
    const id = req.params.id as string;
    try {
      const result = await this.updateProductUseCase.execute({ id, ...req.body });
      // TODO: Change this
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}
