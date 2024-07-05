import { z } from 'zod';

// Define the Zod schema for order validation
const orderValidationSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .min(1, { message: 'User email is required' }),
  productId: z.string().min(1, { message: 'Product Id is required' }),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().positive('Quantity must be a positive number'),
});
export { orderValidationSchema };
