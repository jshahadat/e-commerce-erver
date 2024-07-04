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
  isProductExists(id: string): Promise<TProduct | null>;
  // eslint-disable-next-line no-unused-vars
  isOrderExists(id: string): Promise<TProduct | null>;
};
