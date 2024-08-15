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

- **User Authentication:** Secure login, password recovery, and reset functionality.
- **Contact Management:** Add, view, edit, and delete contact information.
- **Form Handling:** Error-checking and validation for form submissions.
- **Protected Routes:** JWT-based protection for sensitive routes and authorized access.
- **Modal Forms:** Seamless editing of contact details within modal interfaces.
- **Admin Dashboard:** Manage users, view detailed contact logs, and control access to features.

## Folder Structure

```bash
Contact-Directory/
├── public/                     # Static files (CSS, JS, images)
├── src/
│   ├── assets/                 # Static assets (images, fonts)
│   ├── components/             # React components
│   │   ├── Footer.js           # Footer component
│   │   ├── Navbar.js           # Navbar component
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page components
│   │   ├── Table.jsx           # Table page for displaying contacts
│   │   ├── Forms3.jsx          # Forms page
│   │   ├── Login.jsx           # Login page
│   │   ├── Forgot_password.jsx # Forgot Password page
│   │   ├── ResetPassword.jsx   # Reset Password page
│   │   ├── Customer/
│   │   │   ├── Dashboard.jsx          # Customer Dashboard
│   │   │   ├── ChangePassword.jsx     # Change Password page
│   │   │   ├── AddContact.jsx         # Add Contact page
│   │   │   └── View_contact.jsx       # View Contact page
│   │   ├── Admin/
│   │   │   ├── AdminLogin.jsx         # Admin Login page
│   │   │   ├── ChangePassword_admin.jsx # Change Password for Admin
│   │   │   ├── Dashboard.jsx          # Admin Dashboard
│   │   │   ├── ForgotPassword.jsx     # Forgot Password for Admin
│   │   │   ├── ResetPassword_admin.jsx # Reset Password for Admin
│   │   │   ├── ViewUser.jsx           # View Users page
│   ├── App.js                # Main application file
│   ├── index.js              # Entry point
├── backend/                  # Backend source code
│   ├── controllers/          # Controller files
│   │   ├── indexController.js   # Controller handling API logic
│   ├── models/               # Database models
│   │   ├── userModel.js         # User model for MySQL
│   ├── routes/               # Route definitions
│   │   ├── userRoutes.js        # Routes for user endpoints
│   ├── config/               # Configuration files
│   │   ├── dbConfig.js         # Database configuration
│   ├── app.js                # Main application file
│   └── package.json          # Project metadata and dependencies
├── vite.config.js            # Vite configuration
└── package.json              # Project metadata and dependencies

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

#### Admin Routes

- **GET /adminLogin** - Admin Login page
- **GET /forgot_password_admin** - Forgot Password page (Admin)
- **GET /reset_password_admin** - Reset Password page (Admin)
- **GET /admin/dashboard** - Admin Dashboard
- **GET /admin/view_user** - View User page (Admin)
- **GET /admin/change_password** - Change Password page (Admin)

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
- **POST /reset_password/:email** - Reset password for user by email

#### Admin Endpoints

- **POST /adminLogin** - Admin login
- **POST /forgot_password_admin** - Handle forgot password (Admin)
- **POST /verifyOTPadmin** - Verify OTP for password reset (Admin)
- **POST /reset_password_admin/:email** - Reset password for admin by email
- **GET /view_user** - View users (Admin)
- **POST /change_status** - Change user status (Admin)
- **POST /change_password_admin** - Change admin password (protected)
- **POST /view_user_contact** - View user contact information


## Dependencies

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment for modern web projects.
- **React Router DOM**: For managing routing and navigation within the React application.
- **React Hook Form**: For managing form state and validation.
- **SweetAlert2**: For displaying beautiful and customizable alerts.
- **Font Awesome**: For adding scalable vector icons to your project.

### Backend

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: A relational database management system used to manage the application’s data.
- **jsonwebtoken**: For securely transmitting information between the frontend and backend as a JSON object.
- **Nodemailer**: For sending emails, used in functionalities like password reset.
- **cors**: For enabling Cross-Origin Resource Sharing in the application.
- **body-parser**: For parsing incoming request bodies in a middleware.
- **mysql2**: A MySQL client for Node.js with improved performance.

