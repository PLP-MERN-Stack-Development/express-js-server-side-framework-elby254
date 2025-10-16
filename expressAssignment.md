RESTful API with Express.js
Objective

Build a RESTful API using Express.js that can do CRUD operations, use middleware, and handle errors properly.

Tasks
Task 1: Express Setup

Start a new Node.js project

npm init -y


Install express and other packages

npm install express body-parser uuid dotenv


Create a file called server.js

Add a route that shows “Hello World” when you open the browser on port 3000

Task 2: Products API

We are working with products.
Each product should have:

- id (unique id)

- name (string)

- description (string)

- price (number)

- category (string)

- inStock (boolean)

Create these routes:

- GET /api/products → show all products

- GET /api/products/:id → show one product by id

- POST /api/products → create new product

- PUT /api/products/:id → update product

- DELETE /api/products/:id → delete product

Task 3: Middleware

Make these middlewares:

- Logger → show request method, URL, and time in console

- JSON parser → use express.json() to read JSON   
data

- Auth → check if request has an API key

- Validation → check product details before saving

Task 4: Error Handling

- Create a global error handler

- Send proper error messages and status codes

- Use try/catch for async routes

How to Run

Make a .env file

PORT=3000
API_KEY=mysecretkey
MONGO_URI=mongodb://127.0.0.1:27017/productsdb


Start the server

node server.js


Test with Postman or browser

### GET /api/products
Request:
GET http://localhost:3000/api/products

Response:
[
  {
    "id": "1",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics",
    "inStock": true
  }
]