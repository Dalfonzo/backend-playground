import { IProductRepo } from '../../ports/out/productRepo';
import { CreateProductDTO } from '../../use-cases/create-product/createProductDTO';
import { Product } from '../../../shared/infra/database/sequelize/models/product.model';
import { DeleteProductDTO } from '../../use-cases/delete-product/deleteProductDTO';
import { ReadProductByIdDTO } from '../../use-cases/read-product-by-id/readProductByIdDTO';
import { UpdateProductDTO } from '../../use-cases/update-product/updateProductDTO';

export class SequelizeProductRepo implements IProductRepo {
  constructor() {}

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    const newProduct = await Product.create(product);
    return newProduct;
  }

  async readAll(): Promise<CreateProductDTO[]> {
    return Product.findAll();
  }

  async delete({ id }: DeleteProductDTO): Promise<DeleteProductDTO> {
    await Product.destroy({
      where: {
        id: id,
      },
    });
    return { id };
  }

  async readById({ id }: ReadProductByIdDTO): Promise<CreateProductDTO> {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });

    if (!product) {
      throw new Error('no product exists');
    }

    return product;
  }

  async update(dto: UpdateProductDTO): Promise<CreateProductDTO> {
    const { id, ...rest } = dto;
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error('no product exists');
    }

    await product.update({ ...product, ...rest }, { where: { id } });
    await product.save();

    return product;
  }
}
