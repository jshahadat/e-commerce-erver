# Clone Repository

```
git clone https://github.com/jshahadat/user-update.git

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
 POST:

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
 GET:
```

## 3. Retrieve a specific product by ID

```
 GET:

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

## 4. Update user

```
 PUT :

```

```response
{
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

## 5. Delete user

```
 DELETE  :

```

```response
{
	"success": true,
	"message": "User deleted successfully!",
	"data" : null
}
```

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
 GET   :

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
