import { TProduct } from './product.interface';
import Product from './product.model';
import { ObjectId } from 'mongoose';

const createProductIndtoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

// const getSingleProduct = async (productId:) => {
//   if (!(await Product.isProductExists(productId))) {
//     return new Error('User not found!');
//   }
//   const result = await Product.findOne({ productId });
//   return result;
// };

const getSingleProductById = async (id: ObjectId) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw new Error('Error fetching product');
  }
};

export default {
  getSingleProductById,
};

export const ProductServices = {
  createProductIndtoDB,
  getAllProductFromDB,
  getSingleProductById,
};
