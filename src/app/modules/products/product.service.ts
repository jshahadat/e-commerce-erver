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

const getSingleProductByIdFromDB = async (productId: string) => {
  return await Product.findById({ _id: productId });
};

const updateProductIntoDB = async (
  productId: string,
  productData: TProduct,
) => {
  return await Product.findByIdAndUpdate(productId, productData, {
    new: true,
  });
};

// const searchProductsFromDB = async (searchTerm: string) => {
//      return await ProductModel.find({
//        name: { $regex: searchTerm, $options: 'i' },
//      });
//    };

//    const deleteProductFromDB = async (productId: string) => {
//      return await ProductModel.findByIdAndDelete({ _id: productId });
//    };

export const ProductServices = {
  createProductIndtoDB,
  getAllProductFromDB,
  getSingleProductByIdFromDB,
  updateProductIntoDB,
};
