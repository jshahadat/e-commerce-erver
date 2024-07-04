import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string().min(1, { message: 'Type is required' }),
  value: z.string().min(1, { message: 'Value is required' }),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .min(0, { message: 'Quantity must be a non-negative integer' }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.string().min(1, { message: 'Category is required' }),
  tags: z.array(
    z.string().min(1, { message: 'Tag must be a non-empty string' }),
  ),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export {
  variantValidationSchema,
  inventoryValidationSchema,
  productValidationSchema,
};
