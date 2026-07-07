# 🛒 Full-Stack Product Store

A full-stack e-commerce style product management app where users can register, add their own products with photos and descriptions, and manage the community's product catalog together. Built with a Node.js/Express/PostgreSQL backend and a modern React frontend.

## ✨ Features

- 🔐 **User authentication** — sign up and log in via Clerk
- ➕ **Create products** — add new products with a title, description, and photo
- ✏️ **Edit products** — update product details after creation
- 🗑️ **Delete products** — remove products you no longer want listed
- 💬 **Comments** — leave comments on any product
- 🗑️ **Delete comments** — remove comments when needed
- 🌐 **Shared catalog** — any authenticated user can edit or delete products and comments (community-managed store)
- ⚡ **Fast, cached data fetching** — powered by TanStack Query
- 🎨 **Clean, responsive UI** — built with Tailwind CSS & DaisyUI

## 🧰 Tech Stack

**Backend**
- Node.js & Express — REST API
- PostgreSQL — database
- Drizzle ORM — type-safe queries
- TypeScript

**Frontend**
- React (Vite)
- Tailwind CSS & DaisyUI
- TanStack Query — data fetching & caching
- Clerk — authentication


🧪 .env Setup
Backend (/backend)
PORT=3000
DATABASE_URL=<YOUR_DB_URL>
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>

FRONTEND_URL=http://localhost:5173
Frontend (/frontend)
VITE_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>

VITE_API_URL=http://localhost:3000/api
🔧 Run the Backend
cd backend
npm install
npm run dev
🔧 Run the Frontend
bash
cd frontend
npm install
npm run dev
