# Clone Repository

```
git clone https://github.com/jshahadat/e-commerce-erver.git

```

# Installation

```bash
npm install
```

# Quick start

```
npm run start:dev
```

### 1. Create a new user

// List of product objects. fullName, age, email, address .

```
 POST:https://e-commerce-server-plum.vercel.app/api/products

```

```Request Body:
{
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants:  type: string;
  value: string;[];
  inventory: quantity: number;
  inStock: boolean;;
}
```

### 2. Retrieve a list of all product

// List of product objects. Each object should only contain name, description, price, category, variants .

```
 GET:https://e-commerce-server-plum.vercel.app/api/products
```

## 3. Retrieve a specific product by ID

```
 GET:https://e-commerce-server-plum.vercel.app/api/products/:productId

```

```response
{
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
        "name": "string",
        "description": "string",
        "price": number,
        "category": "string",
        "tags": string[],
    }
}
```

## 4. Update product

```
 PUT :https://e-commerce-server-plum.vercel.app/api/products/:productId

```

## 5. Delete product

```
 DELETE  :https://e-commerce-server-plum.vercel.app/api/products/:productId

```

```response
{
	"success": true,
	"message": "User deleted successfully!",
	"data" : null
}
```

## 6. Search New product

{
"success": true,
"message": "Products matching search term 'iphone' fetched successfully!",
"data": [
{
"name": "iPhone 13 Pro",
"description": "The latest flagship iPhone model with advanced camera features.",
"price": 999,
"category": "Smartphones",
"tags": ["iPhone", "Apple", "Mobile"],
"variants": [
{
"type": "Color",
"value": "Graphite"
},
{
"type": "Storage",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
},
{
"name": "iPhone SE",
"description": "Compact and affordable iPhone model with powerful performance.",
"price": 399,
"category": "Smartphones",
"tags": ["iPhone", "Apple", "Mobile"],
"variants": [
{
"type": "Color",
"value": "White"
},
{
"type": "Storage",
"value": "128GB"
}
],
"inventory": {
"quantity": 20,
"inStock": true
}
}
]
}

## 6. Place New Order

```
 PUT  :

 {
    "productName": "string",
    "price": "number",
    "quantity": "number"
}

```

```response
{
    "success": true,
    "message": "Order created successfully!",
    "data": null
}
```

## 7. Retrieve all orders for a specific user

```
 GET   ::https://e-commerce-server-plum.vercel.app/api/orders?email=level2@programming-hero.com

```

```response
{
    "success": true,
    "message": "Order fetched successfully!",
    "data": {
        "orders": [
            {
                "productName": "Product 1",
                "price": 23.56,
                "quantity": 2
            },
            {
                "productName": "Product 2",
                "price": 23.56,
                "quantity": 5
            }
        ]
    }
}
```
