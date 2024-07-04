import { ObjectId } from 'mongoose';
import { Model } from 'mongoose';

export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
};

export type ProductModel = Model<TProduct> & {
  // eslint-disable-next-line no-unused-vars
  isProductExists(id: ObjectId): Promise<TProduct | null>;
  // eslint-disable-next-line no-unused-vars
  isOrderExists(id: ObjectId): Promise<TProduct | null>;
};
