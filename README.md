# 🧠 SmartTask Hub (TaskHub)

A full-stack Task Management web application built with **MERN (MongoDB, Express, React, Node.js)**.  
Users can register, log in, and manage their tasks with features like filtering, sorting, search, and status updates.

> **Internship Project**  
> **Student:** Akshay Pandey  
> **Institute:** IIIT Naya Raipur  
> **Company:** IStudio Technologies  
> **Duration:** October 2025 – December 2025

---

## 🌐 Live Links

- 🔗 **Frontend (Vercel):** https://taskhub.vercel.app  
- 🔗 **Backend API (Render):** https://taskhub-api.onrender.com  
- 🔗 **GitHub Repository:** https://github.com/AkshayPandey/task-hub  

---

## 📚 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [System Architecture](#-system-architecture)
5. [Project Structure](#-project-structure)
6. [Installation & Setup (Local)](#-installation--setup-local)
7. [Environment Variables](#-environment-variables)
8. [API Endpoints](#-api-endpoints)
9. [Authentication Flow](#-authentication-flow)
10. [Usage Guide](#-usage-guide)
11. [Screenshots](#-screenshots)
12. [Future Improvements](#-future-improvements)
13. [Acknowledgements](#-acknowledgements)

---

## 🧾 Overview

**SmartTask Hub (TaskHub)** is a responsive Task Management platform that allows users to:

- Securely **register & log in** using JWT-based authentication.
- **Create, read, update, and delete (CRUD)** tasks.
- **Filter** tasks by status (Pending, In-Progress, Completed).
- **Sort** tasks by newest/oldest or by **due date**.
- **Search** tasks by title.
- View a clean, mobile-friendly UI designed for productivity.

The backend is hosted on **Render**, the frontend on **Vercel**, and MongoDB is managed via **MongoDB Atlas**.

---

## ✨ Features

### 🔐 Authentication & Security
- User **registration** and **login** with email & password.
- Passwords stored securely using **bcrypt hashing**.
- **JWT (JSON Web Token)** used for stateless authentication.
- Protected routes – only authenticated users can manage tasks.

### ✅ Task Management
- Create new tasks with:
  - Title (required)
  - Description (optional)
  - Status (Pending / In-Progress / Completed)
  - Due Date (optional)
- Edit existing tasks.
- Delete tasks with confirmation.
- Toggle completion status quickly.

### 🔎 Productivity Features
- **Filter** by status.
- **Sort**:
  - Newest first
  - Oldest first
  - Closest due date first
- **Search** by task title (live filtering).

### 💻 UI & UX
- Responsive layout (works on desktop & mobile).
- Clean design with **Bootstrap**.
- Loading indicators and proper error messages.
- Clear feedback on success/failure (alerts, messages).

---

## 🛠 Tech Stack

**Frontend**
- React.js (Functional Components, Hooks)
- React Router DOM
- Axios
- Bootstrap / Custom CSS

**Backend**
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose (ODM)
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

**DevOps & Deployment**
- Vercel (Frontend)
- Render (Backend)
- Git & GitHub (Version Control)

---

## 🏗 System Architecture

**Client (Vercel)**
- React app sends HTTP requests via Axios to the backend API.
- Stores JWT token in `localStorage` after successful login/registration.
- Adds `Authorization: Bearer <token>` header via Axios interceptor.

**Server (Render)**
- Express.js app exposes RESTful routes under `/api`.
- Uses JWT middleware to protect task routes.
- Connects to MongoDB Atlas using Mongoose.
- Performs validation, error handling, and business logic.

**Database (MongoDB Atlas)**
- `User` collection – stores user credentials (hashed passwords).
- `Task` collection – stores each user’s tasks with references to `userId`.

---

## 📁 Project Structure

```text
task-hub/
|
├── backend/
│   ├── config/            # DB connection, environment config
│   ├── controllers/       # auth & task controllers
│   ├── middleware/        # auth middleware (JWT)
│   ├── models/            # Mongoose models (User, Task)
│   ├── routes/            # Express routes (auth, tasks)
│   ├── server.js          # Express app entry point
│   ├── package.json
│   └── .env.example       # Sample backend environment variables
|
├── frontend/
│   ├── public/            # index.html, favicon, etc.
│   ├── src/
│   │   ├── components/    # Navbar, TaskItem, TaskForm, PrivateRoute
│   │   ├── pages/         # LoginPage, RegisterPage, TaskPage
│   │   ├── services/      # API services (authService, taskService)
│   │   ├── styles/        # Global styles (CSS)
│   │   ├── App.js         # Main React component
│   │   └── index.js       # React entry point
│   ├── package.json
│   └── .env.example       # Sample frontend environment variables
|
└── README.md
