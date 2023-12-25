import { GeneralErrors } from '../../shared/core/GeneralErrors';
import { Result } from '../../shared/core/Result';

interface ProductProps {
  id?: string;
  name?: string;
  price?: number;
  brand?: string;
}

export class Product {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_props: ProductProps) {}

  public static create(props: ProductProps) {
    if (Number(props.price) <= 0) {
      return Result.fail({ message: 'Price should be above 0', code: new GeneralErrors().BadRequest().code });
    }
    const product = new Product(props);

    return Result.ok(product);
  }
}
