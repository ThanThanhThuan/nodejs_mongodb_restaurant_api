# Restaurant App Backend

Tech Stack: Node.js, Express.js, MongoDB (Mongoose).

This backend serves as the REST API for the application. It handles data persistence for table reservations and communicates with the MongoDB database.

    Key Files & Structure:

        server.js: The entry point. It connects to MongoDB, configures Middleware (CORS, JSON parsing), and defines the API routes.

        models/Reservation.js: Defines the Mongoose schema for the database. It enforces the structure of a reservation object (people, date, time, status, createdAt).

        .env: Stores sensitive configuration like the Database URI (MONGO_URI) and Port.

        .gitignore: Ensures node_modules and .env are not uploaded to version control.

    API Endpoints:

        POST /api/reservations: Receives JSON data (guests, date, time) and saves a new reservation to the database.

        GET /api/reservations: Retrieves the list of all reservations sorted by newest first (used by the Admin Dashboard).

    How to Run:

        Ensure MongoDB is running locally (mongod).

        Navigate to the folder: cd backend

        Start server: npm run dev (Runs on port 5000).
