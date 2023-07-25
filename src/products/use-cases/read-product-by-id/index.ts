import { ReadProductByIdController } from './readProductByIdController';
import { ReadProductByIdUseCase } from './readProductByIdUseCase';
import { SequelizeProductRepo } from '../../infra/adapters/SequelizeProductRepo';

const sequelizeProductRepo = new SequelizeProductRepo();
const readProductByIdUseCase = new ReadProductByIdUseCase(sequelizeProductRepo);
const readProductByIdController = new ReadProductByIdController(readProductByIdUseCase);

export { readProductByIdController };
