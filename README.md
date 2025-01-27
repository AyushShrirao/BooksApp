 # BookApp

BookApp is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to view free books on the homepage and access paid books on the Courses page after signing up. The app also includes dark and light mode functionality, and securely stores user credentials in encrypted form.

## Features

1. **Homepage**:
   - Display all free books for all users.
2. **Courses Page**:
   - Paid books are displayed.
   - Requires users to sign up to access.
3. **User Authentication**:
   - Users can sign up and sign in.
   - Passwords are stored in the database in encrypted form.
4. **Dark and Light Mode**:
   - Users can toggle between dark and light mode.

---

## Folder Structure

```
BookApp/
├── backend/
│   ├── config/
│   │   └── db.js          # MongoDB connection configuration
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js        # User schema
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── server.js          # Entry point for the backend
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookCard.js
│   │   │   ├── Navbar.js
│   │   │   └── ToggleTheme.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   └── CoursesPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
└── README.md              # Project documentation
```

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/BookApp.git
   cd BookApp
   ```

2. **Setup the backend**:
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` folder with the following variables:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-secret-key
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Setup the frontend**:
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
 
---

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), bcrypt for password hashing

---

## Screenshots

### Homepage
 [![Screenshot (63)](https://github.com/user-attachments/assets/18444b61-7499-4986-9266-8bb6bde34553)
]

### Courses Page
[![Screenshot (59)](https://github.com/user-attachments/assets/9c2996b9-e2ae-42d2-8b3f-4119a59464d8)
]

### Signup Page
[![Screenshot (61)](https://github.com/user-attachments/assets/fdb75e03-d580-451b-9888-242d39ca3f9c)
]

### LogIn Page
[![Screenshot (62)](https://github.com/user-attachments/assets/e15d4729-cb6f-4da1-9918-a01cc819a48f)]

---

## API Endpoints

### User Authentication
- **POST /api/users/signup** - Register a new user
- **POST /api/users/login** - Log in a user

### Books
- **GET /api/books/free** - Fetch all free books
- **GET /api/books/paid** - Fetch all paid books (protected route)

---

## Security
- Passwords are hashed using `bcrypt` before being stored in the database.
- Routes that require authentication are protected using JWT middleware.

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
