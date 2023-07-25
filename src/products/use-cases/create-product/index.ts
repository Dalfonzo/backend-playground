import { CreateProductController } from './createProductController';
import { CreateProductUseCase } from './createProductUseCase';
import { SequelizeProductRepo } from '../../infra/adapters/SequelizeProductRepo';

const sequelizeProductRepo = new SequelizeProductRepo();
const createProductUseCase = new CreateProductUseCase(sequelizeProductRepo);
const createProductController = new CreateProductController(createProductUseCase);

export { createProductController };
