import { Schema, model } from 'mongoose';
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from './product.interface';
// import { ObjectId } from 'mongoose';

const variantSchema = new Schema<TVariant>(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false },
);

const inventorySchema = new Schema<TInventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false },
);

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

// // Static
// productSchema.statics.isProductExists = async function (
//   id: ObjectId,
// ): Promise<TProduct | null> {
//   return this.findById(id).exec();
// };

// productSchema.statics.isOrderExists = async function (
//   id: ObjectId,
// ): Promise<TProduct | null> {
//   // Assuming the product ID is used to check order existence
//   return this.findById(id).exec();
// };
const Product = model<TProduct, ProductModel>('Product', productSchema);

export default Product;
