# TikTok_Server
# Practical 2: TikTok REST API Design and Implementation

## 📌 Overview

In this practical, we designed and built a RESTful API backend for a TikTok-like application using **Node.js** and **Express.js**. This API includes endpoints for managing users, videos, comments, likes, and follows, forming the foundation for the app's frontend integration.

---

## 🛠️ Tech Stack

- **Express.js** – Web server framework
- **CORS** – Enables cross-origin requests
- **Morgan** – HTTP request logger
- **Body-Parser** – Middleware for parsing request bodies
- **Dotenv** – Loads environment variables
- **Nodemon** – Auto-restarts server during development

---

## 🗂️ API Resource Overview

| Resource   | Endpoints                                          | Methods                        |
|------------|----------------------------------------------------|--------------------------------|
| Videos     | `/api/videos`, `/api/videos/:id`                  | GET, POST, PUT, DELETE         |
| Comments   | `/api/comments`, `/api/videos/:id/comments`       | GET, POST, DELETE              |
| Users      | `/api/users`, `/api/users/:id`                    | GET, POST, PUT, DELETE         |
| Likes      | `/api/videos/:id/likes`, `/api/comments/:id/likes`| GET, POST (like/unlike)        |
| Follows    | `/api/users/:id/followers`, `/following`          | GET, POST (follow/unfollow)    |

---

## 🏗️ Folder Structure


# Practical 4: Connecting TikTok to PostgreSQL with Prisma ORM

## 📌 Overview

In this practical, we transitioned our TikTok clone backend from in-memory data to a **PostgreSQL** database using **Prisma ORM**. We implemented a full database schema, added authentication with encrypted passwords, and migrated our REST API endpoints to interact with real persistent storage.

---

## 🛠️ Technologies Used

- **Node.js / Express** – Backend framework
- **PostgreSQL** – Relational database
- **Prisma ORM** – Database interaction and schema management
- **JWT + bcrypt** – Secure user authentication
- **Postman** – Testing endpoints

---

## 🚀 Key Steps

1. **PostgreSQL Setup**
   - Created a `tiktok_db` database and user.
   - Configured credentials in `.env`.

2. **Prisma ORM Initialization**
   - Installed and initialized Prisma.
   - Defined models for `User`, `Video`, `Comment`, etc.
   - Ran `npx prisma migrate dev --name init` to create the schema.

3. **Authentication Setup**
   - Passwords are hashed using `bcrypt`.
   - JWT tokens are issued on login for session management.

4. **Controller Refactor**
   - Updated `userController.js`, `videoController.js`, and `commentController.js` to use Prisma Client.
   - Implemented Prisma queries with relational logic.

5. **Test Data Seeding**
   - Created a `seed.js` script to generate users, videos, likes, and comments.

---

## ✅ Testing Instructions

- Use Postman to:
  - Register and log in a user
  - Access protected routes using JWT tokens
  - Test video upload and comment creation

---

# Practical 5: Implementing Cloud Storage with Supabase

## 🧩 Overview

In this practical, we enhanced the TikTok clone application by integrating **Supabase Storage**. This upgrade replaced local file uploads with scalable, secure, and globally accessible cloud storage. Supabase's CDN-backed infrastructure ensures that videos and thumbnails are reliably stored and quickly served worldwide.

---

## 🛠️ Tech Stack

- **Supabase Storage** – Cloud file hosting with access policies
- **Prisma ORM** – For database schema updates
- **Node.js & Express** – Backend server
- **Next.js (React)** – Frontend UI
- **Supabase JS SDK** – Client interface for both frontend and backend

---

## ⚙️ Features Implemented

- Replaced local storage with Supabase for videos and thumbnails
- Created public/private buckets with custom access policies
- Enabled direct upload from the frontend to Supabase
- Updated Prisma schema with new fields for storage paths
- Added a migration script to move existing files to cloud storage
- Removed legacy file-serving logic from the backend

---

## 📂 Folder Structure Updates

**Backend:**
- `/src/lib/supabase.js` – Supabase client config
- `/src/services/storageService.js` – Cloud upload service
- Updated `videoController.js` for Supabase logic

**Frontend:**
- `/src/lib/supabase.js` – Supabase client config (public)
- `/src/services/uploadService.js` – Handles direct uploads
- Updated `/upload/page.jsx` and `VideoCard.jsx`

---

