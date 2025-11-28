# SmartTask Hub – Task Management Web Application

SmartTask Hub is a full-stack task management application built as an internship project.  
Users can register, log in, and manage their tasks with features like filtering, sorting, search, and status updates.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: https://YOUR-FRONTEND-URL.vercel.app  
- **Backend API (Render)**: https://task-management-app-eik4.onrender.com  

> Replace the URLs above with your actual deployed links.

---

## 🧱 Project Structure

```bash
task-management-app/
├── backend/                 # Node.js + Express + MongoDB API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/              # (if present)
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example        # sample backend environment
│
├── frontend/                # React.js single page application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example        # sample frontend environment
│
├── README.md
└── .gitignore
