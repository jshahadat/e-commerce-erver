import { Model, Types } from 'mongoose';

export type TOrder = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};

export interface OrderModel extends Model<TOrder> {
  // eslint-disable-next-line no-unused-vars
  isOrderExists(id: string): Promise<TOrder | null>;
}
