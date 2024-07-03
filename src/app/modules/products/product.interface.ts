type Variant = {
  type: string;
  value: string;
};

type Inventory = {
  quantity: number;
  inStock: boolean;
};

type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};
