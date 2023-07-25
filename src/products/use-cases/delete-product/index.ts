import { DeleteProductController } from './deleteProductController';
import { DeleteProductUseCase } from './deleteProductUseCase';
import { SequelizeProductRepo } from '../../infra/adapters/SequelizeProductRepo';

const sequelizeProductRepo = new SequelizeProductRepo();
const deleteProductUseCase = new DeleteProductUseCase(sequelizeProductRepo);
const deleteProductController = new DeleteProductController(deleteProductUseCase);

export { deleteProductController };
