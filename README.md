# Contact Directory

This repository contains the source code for the Contact Directory application, which is a comprehensive system for managing contact information. The project is built with React and Vite for the frontend and Node.js with Express for the backend.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)

## Installation

### Frontend

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Navnoorsinghmahal/Contact-Directory.git
    cd Contact-Directory
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

### Backend

1. **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    - Configure your MySQL database as required.

## Configuration

- **Frontend:**
  - Configure Vite and React settings as needed.

- **Backend:**
  - Configure your MySQL server and ensure it is running.

## Usage

### Frontend

1. **Start the development server:**
    ```sh
    npm start
    ```

2. **Access the application:**
    - Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend

1. **Start the server:**
    ```sh
    npm run dev
    ```

2. **Access the API:**
    - The backend API will be available at [http://localhost:2000](http://localhost:2000).

## Features

- **User Authentication:** Login, Forgot Password, Reset Password
- **Contact Management:** Add, View, Edit, Delete Contacts
- **Form Handling:** Handle form submissions with error checking and validation
- **Protected Routes:** Use JWT for protecting routes and ensuring authorized access
- **Modal Forms:** For editing contact details

## Folder Structure

```bash
Contact-Directory/
├── public/                 # Static files (CSS, JS, images)
├── src/
│   ├── assets/             # Static assets (images, fonts)
│   ├── components/         # React components
│   │   ├── Footer.js # Table component for displaying contacts
│   │   ├── Navbar.js    # Modal form component for editing contact details
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   │   ├── Table.jsx       # Table page
│   │   ├── Forms3.jsx      # Forms page
│   │   ├── Login.jsx       # Login page
│   │   ├── Forgot_password.jsx # Forgot Password page
│   │   ├── ResetPassword.jsx   # Reset Password page
│   │   ├── Customer/
│   │   │   ├── Dashboard.jsx    # Customer Dashboard
│   │   │   ├── ChangePassword.jsx # Change Password page
│   │   │   ├── AddContact.jsx    # Add Contact page
│   │   │   └── View_contact.jsx  # View Contact page
│   ├── App.js              # Main application file
│   ├── index.js            # Entry point
├── backend/                # Backend source code
│   ├── controllers/        # Controller files
│   │   ├── indexController.js # Controller handling API logic
│   ├── models/             # Database models
│   │   ├── userModel.js    # User model for MySQL
│   ├── routes/             # Route definitions
│   │   ├── userRoutes.js   # Routes for user endpoints
│   ├── config/             # Configuration files
│   │   ├── dbConfig.js     # Database configuration
│   ├── .env                # Environment variables
│   ├── app.js              # Main application file
│   └── package.json        # Project metadata and dependencies
├── .env                    # Environment variables for frontend
├── vite.config.js          # Vite configuration
└── package.json            # Project metadata and dependencies
```
## API Endpoints

### Frontend Routes

- **GET /** - Homepage
- **GET /table** - Table page
- **GET /forms3** - Forms page
- **GET /login** - Login page
- **GET /forgot_password** - Forgot Password page
- **GET /resetpassword** - Reset Password page
- **GET /customer/dashboard** - Customer Dashboard
- **GET /customer/changepassword** - Change Password page
- **GET /customer/addcontact** - Add Contact page
- **GET /customer/viewcontact** - View Contact page

### Backend Endpoints

- **POST /form** - Handle form submission
- **GET /formdata** - Retrieve form data
- **POST /login** - User login
- **POST /change_password** - Change user password (protected)
- **POST /contactform** - Add new contact (protected)
- **GET /view_contact** - View contacts (protected)
- **POST /delete_contact** - Delete contact (protected)
- **POST /edit_contact** - Edit contact (protected)
- **POST /forgot_password** - Handle forgot password
- **POST /verifyOTP** - Verify OTP for password reset
- **POST /reset_password/** - Reset password for user by email

## Dependencies

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **React Hook Form**: A library for managing form state and validation.
- **SweetAlert2**: A library for beautiful, responsive alerts.
- **Vite**: A build tool that provides a fast development experience.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Font Awesome**: A library for icons used in the application.

### Backend

- **Express**: A minimal and flexible Node.js web application framework.
- **MySQL**: A popular relational database management system.
- **dotenv**: A module to load environment variables from a .env file.
- **body-parser**: Middleware to handle incoming request data.
- **mysql2**: A MySQL client for Node.js with Promise support.
- **jsonwebtoken**: A library for creating and verifying JSON Web Tokens for authentication.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **express-fileupload**: Middleware for handling file uploads.
- **cookie-parser**: Middleware for parsing cookies.
