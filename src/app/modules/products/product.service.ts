import { TProduct } from './product.interface';
import Product from './product.model';

const createProductIndtoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductServices = {
  createProductIndtoDB,
  getAllProductFromDB,
};
