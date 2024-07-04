import mongoose from 'mongoose';

import { TOrder } from './order.interface';
import { Order } from './order.model';
import Product from '../products/product.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const { productId, quantity } = payload;
  const product = await Product.findById({ _id: productId });
  if (!product) {
    throw new Error('Product not found!');
  }
  if (product.inventory?.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  const currentQuantity =
    Number(product.inventory?.quantity) - Number(quantity);

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const result = await Order.create([payload], { session });

    const updatableProductData = {
      'inventory.quantity': currentQuantity,
      'inventory.inStock': currentQuantity <= 0 ? false : true,
    };

    await Product.findByIdAndUpdate(productId, updatableProductData, {
      new: true,
      runValidators: true,
      session,
    });

    await session.commitTransaction();
    await session.endSession();

    return result[0];
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to Place Order!');
  }
};

const getOrdersFromDBWithEmail = async (query: Record<string, unknown>) => {
  let filterQuery = Order.find();
  if (query?.email) {
    filterQuery = filterQuery.find({ email: query.email });
  }
  const result = await filterQuery;
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getOrdersFromDBWithEmail,
  getAllOrderFromDB,
};
