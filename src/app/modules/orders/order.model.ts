import { model, Schema } from 'mongoose';
import { OrderModel, TOrder } from './order.interface';

const orderlSchema = new Schema<TOrder, OrderModel>({
  email: {
    type: String,
    required: [true, 'User email is required'],
    trim: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Product Id is required'],
    trim: true,
  },
  price: { type: Number, required: [true, 'Price is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
});

//  static method
orderlSchema.statics.isOrderExists = async function (id: string) {
  return await Order.findById(id);
};

export const Order = model<TOrder, OrderModel>('Order', orderlSchema);
