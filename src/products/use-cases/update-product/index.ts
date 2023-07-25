import { UpdateProductController } from './updateProductController';
import { UpdateProductUseCase } from './updateProductUseCase';
import { SequelizeProductRepo } from '../../infra/adapters/SequelizeProductRepo';

const sequelizeProductRepo = new SequelizeProductRepo();
const updateProductUseCase = new UpdateProductUseCase(sequelizeProductRepo);
const updateProductController = new UpdateProductController(updateProductUseCase);

export { updateProductController };
