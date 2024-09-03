Product CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing products. The project consists of a React frontend and a NestJS backend using Prisma as the ORM. The UI allows users to create, view, edit, and delete products, while the backend handles the database operations through Prisma.

Features
Create Product: Add new products by providing a name, description, and price.
Read Products: View a list of all products.
Update Product: Edit the details of an existing product.
Delete Product: Remove a product from the list.
Tech Stack
Frontend: React (using useState, useEffect)
Backend: NestJS with Prisma ORM
Styling: Tailwind CSS for simple styling
Installation
Backend Setup (NestJS + Prisma)

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install backend dependencies:
```bash
cd backend
npm install
```
3. Set up your Prisma database configuration in the .env file.

4. Run Prisma migrations:
```bash
npx prisma migrate dev
```

5. Start the NestJS server:
```bash
npm run start
```

The backend will be running at http://localhost:3001.

Frontend Setup

6. Install frontend dependencies:

```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will be accessible at http://localhost:3000.

API Endpoints

The frontend interacts with the following backend endpoints, managed by NestJS:

GET /products: Fetch all products.

POST /products: Create a new product.

GET /products/:id: Fetch a single product by ID.

PATCH /products/:id: Update a product by ID.

DELETE /products/:id: Delete a product by ID.

Backend: Managed by NestJS with Prisma handling database interactions.

Contributing

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue first to discuss the proposed changes.

License
This project is open-source and available under the MIT License.