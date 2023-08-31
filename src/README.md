# Backend Interview Practice

## Table of Contents

1. [Skills and Technologies](#skills-and-technologies)
2. [Getting Started](#getting-started)
3. [Code Structure](#code-structure)
4. [Error Handling](#error-handling)
5. [Contributing](#contributing)

---

## Skills and Technologies

This project utilizes the following skills and technologies:

- **Node.js**: Backend JavaScript runtime
- **Express**: Web framework for Node.js
- **Knex**: SQL query builder
- **Async/Await**: For handling asynchronous operations
- **Middleware**: Custom and third-party middleware for error handling
- **RESTful API Design**: POST and GET routes

---

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/alexgoodestudio/backend-interview-practice.git
    ```

2. **Install Dependencies**

    ```bash
    cd backend-interview-practice
    npm install
    ```

3. **Run Migrations**

    ```bash
    knex migrate:latest
    ```

4. **Start the Server**

    ```bash
    npm start
    ```

---

## Code Structure

- `router.js`: Defines the routes and associated methods.
- `controller.js`: Contains the logic for each route.
- `service.js`: Interacts with the database.
- `asyncErrorBoundary.js`: Middleware for handling async errors.
- `app.js`: Sets up the Express application.
- `server.js`: Starts the server and runs migrations.

---

## Error Handling

Custom middleware is used for error handling:

- `methodNotAllowed`: Handles unsupported HTTP methods.
- `asyncErrorBoundary`: Catches async errors and forwards them to the error handler.
- `notFound`: Handles 404 errors.
- `errorHandler`: General error handler.

---

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first.

---

### Analogy

Think of this project as a restaurant. The `router` is like the menu, showing what's available. The `controller` is the chef, preparing each dish. The `service` is the supplier, providing the ingredients. The `asyncErrorBoundary` is the first-aid kit, ready for any kitchen accidents. Finally, `app` and `server` are the restaurant building and its location, making everything come together.

---
