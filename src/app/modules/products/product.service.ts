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

const deleteSingleProductFromDB = async (productId: string) => {
  return await Product.findByIdAndDelete({ _id: productId });
};

const getSearchProductsFromDB = async (query: Record<string, unknown>) => {
  let searchQuery = Product.find();

  if (query?.searchTerm) {
    const searchTerm = query.searchTerm;
    searchQuery = searchQuery.find({
      $or: searchFields.map((field: any) => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  const result = await searchQuery;

  return result;
};

export const ProductServices = {
  createProductIndtoDB,
  getAllProductFromDB,
  getSingleProductByIdFromDB,
  updateProductIntoDB,
  deleteSingleProductFromDB,
  getSearchProductsFromDB,
};
