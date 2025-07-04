# 💸 Expense Tracker

A full-stack Expense Tracker web application that allows users to manage their income and expenses with authentication, visual insights, and Excel downloads. Built with **React (Vite)** and **Node.js + Express**, styled using **Tailwind CSS**, and powered by **MongoDB**.

---

## 🚀 Tech Stack

### 🖥 Frontend

- React 19 (Vite)
- React Router DOM
- Tailwind CSS
- Recharts (for charts)
- Axios
- Emoji Picker
- React Hot Toast

### ⚙️ Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT (Authentication)
- Multer (Image Upload)
- XLSX (Excel export)
- bcryptjs (Password hashing)
- dotenv, cors, nodemon

---

LIVE LINK : finance-platform-frontend.vercel.app

GITHUB :  https://github.com/rishika-chaudharyy/Finance-Platform.git

LINKEDIN : https://www.linkedin.com/in/rishika-chaudharyy/

## ✨ Features

- ✅ User Authentication (Register, Login)
- ✅ Dashboard Summary (Income vs Expense)
- ✅ Add / Delete Income & Expense
- ✅ Download reports in Excel (`.xlsx`)
- ✅ Upload Profile Image
- ✅ Toast notifications
- ✅ Moment.js for date formatting
- ✅ Clean, responsive UI

---

## 📁 Project Structure

project-root/
├── backend/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js
└── frontend/
└── expense-tracker/
├── src/
├── public/
└── vite.config.js

---

## 🔐 API Endpoints

> **Base URL:** `http://localhost:8000`

### 🔑 Auth

- `POST /api/v1/auth/register` – Register user
- `POST /api/v1/auth/login` – Login user
- `GET /api/v1/auth/getUser` – Get user info
- `POST /api/v1/auth/upload-image` – Upload profile image

### 📊 Dashboard

- `GET /api/v1/dashboard` – Fetch income & expense summary

### 💰 Income

- `POST /api/v1/income/add` – Add income
- `GET /api/v1/income/get` – Get all income entries
- `DELETE /api/v1/income/:id` – Delete income
- `GET /api/v1/income/downloadExcel` – Download income report

### 🧾 Expense

- `POST /api/v1/expense/add` – Add expense
- `GET /api/v1/expense/get` – Get all expenses
- `DELETE /api/v1/expense/:id` – Delete expense
- `GET /api/v1/expense/downloadExcel` – Download expense report

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js and npm
- MongoDB installed or MongoDB Atlas URI

### 🔧 Backend Setup

```bash
cd backend

npm install

touch .env

PORT=8000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

npm run dev
cd frontend/expense-tracker
npm install
npm run dev
```

🧑‍💻 Author
Made with ❤️ by Rishika Dharmatma Chaudhary
