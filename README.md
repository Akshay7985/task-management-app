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


⚙️ Installation & Local Setup
1️⃣ Clone the Repository
git clone https://github.com/AkshayPandey/task-hub.git
cd task-hub

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
CORS_ORIGIN=http://localhost:3000


Start backend:

npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start


Create a .env file inside /frontend:

REACT_APP_API_URL=http://localhost:5000/api

🔥 Production Environment Variables
Backend (Render)
MONGO_URI=your_production_atlas_uri
JWT_SECRET=your_secure_key
PORT=5000
CORS_ORIGIN=https://taskhub.vercel.app

Frontend (Vercel)
REACT_APP_API_URL=https://taskhub-api.onrender.com/api

🧪 API Summary
Auth Endpoints
Method	Endpoint	Purpose
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and return JWT
Task Endpoints (Authenticated)
Method	Endpoint	Purpose
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
📸 Screenshots

🖼 Login Page
<img width="1333" height="577" alt="image" src="https://github.com/user-attachments/assets/dd89f2ad-e6dd-4a8b-a93c-6821bd41a90b" />

🖼 Register Page
<img width="1338" height="611" alt="image" src="https://github.com/user-attachments/assets/5bb29e7d-d69d-4194-b9e5-be956c2ad512" />

🖼 Dashboard
<img width="1369" height="825" alt="image" src="https://github.com/user-attachments/assets/fd7ec875-af6e-4931-8cda-345d05984e9a" />

🧪 Testing & Validation Report

✔ Authentication tested with valid & invalid credentials
✔ CRUD operations verified
✔ Responsiveness tested (Mobile + Desktop)
✔ Cross-browser tested (Chrome, Edge)
✔ MongoDB Atlas connection verified
✔ Deployment tested on Vercel + Render

🚀 Future Enhancements

🔔 Push Notifications & Reminders

🎨 Light/Dark Mode Toggle

🏷 Task Categories & Priority

🔄 Drag & Drop Reordering

🔐 Google / OAuth Login

🏁 Internship Summary

This project helped in learning and implementing:

Full-stack web development

JWT authentication workflow

Cloud deployment (Render + Vercel)

Debugging, API testing & UI optimization

👨‍🎓 Internship Details
Field	Info
Name	Akshay Pandey
Organization	IStudio Technologies
Duration	Oct 2025 — Dec 2025
Institute	IIIT Naya Raipur
🏷 Credits

This application was developed as part of a professional internship under IStudio Technologies.
