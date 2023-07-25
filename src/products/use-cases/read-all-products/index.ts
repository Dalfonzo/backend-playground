import { ReadAllProductsController } from './readAllProductsController';
import { ReadAllProductsUseCase } from './readAllProductsUseCase';
import { SequelizeProductRepo } from '../../infra/adapters/SequelizeProductRepo';

const sequelizeProductRepo = new SequelizeProductRepo();
const readAllProductsUseCase = new ReadAllProductsUseCase(sequelizeProductRepo);
const readAllProductsController = new ReadAllProductsController(readAllProductsUseCase);

export { readAllProductsController };
