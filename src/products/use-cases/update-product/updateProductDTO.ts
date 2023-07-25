import { CreateProductDTO } from '../create-product/createProductDTO';

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
