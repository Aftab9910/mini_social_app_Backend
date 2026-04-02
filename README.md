# MiniSocial Backend API 🚀

Backend service for **MiniSocial**, a simple social media application that allows users to register, login, create posts, like posts, and comment on posts.

Built using **Node.js, Express.js, MongoDB Atlas, JWT Authentication**.

---

## Features ✨

* User Authentication (Signup & Login)
* JWT Authorization
* Create Post (text + image URL)
* Like / Unlike Post ❤️
* Comment on Post 💬
* Get All Posts Feed 📰
* Profile based Posts
* MongoDB Atlas Database ☁️

---

## Tech Stack 🛠

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* cors
* dotenv

---

## Project Structure 📁

```
backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── postController.js
│
├── middleware
│   └── auth.js
│
├── models
│   ├── User.js
│   └── Post.js
│
├── routes
│   ├── auth.routes.js
│   └── posts.routes.js
│
├── .env
├── server.js
└── package.json
```

---

## Installation ⚙️

### 1. Clone repository

```
git clone https://github.com/yourusername/minisocial-backend.git
cd minisocial-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create .env file

```
PORT=4000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Example MongoDB Atlas URL:

```
mongodb+srv://username:password@cluster.mongodb.net/minisocial
```

---

## Run Server ▶️

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

Server runs on:

```
http://localhost:4000
```

---

## API Endpoints 📡

### Auth Routes

#### Register User

POST /api/v1/auth/register

Body:

```
{
  "username": "rahul",
  "email": "rahul@gmail.com",
  "password": "123456"
}
```

---

#### Login User

POST /api/v1/auth/login

Body:

```
{
  "email": "rahul@gmail.com",
  "password": "123456"
}
```

Response:

```
{
  "token": "...",
  "user": {
    "_id": "...",
    "username": "rahul"
  }
}
```

---

### Post Routes

#### Create Post

POST /api/v1/posts

Headers:

```
Authorization: Bearer token
```

Body:

```
{
  "text": "Goa trip",
  "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
}
```

---

#### Get All Posts

GET /api/v1/posts

---

#### Like Post

PUT /api/v1/posts/:id/like

---

#### Comment on Post

PUT /api/v1/posts/:id/comment

Body:

```
{
  "comment": "Nice pic!"
}
```

---

## Environment Variables 🔐

| Variable   | Description                     |
| ---------- | ------------------------------- |
| PORT       | Server Port                     |
| MONGO_URL  | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for JWT token        |

---

## Deployment 🌍

Backend deployed on:

Render / Railway / Cyclic / Vercel Serverless

Example:

https://your-backend-url.onrender.com

---

## Author 👨‍💻

Aftab Ansari

MCA Student
Backend Developer
Skills: Node.js, Express, MongoDB, JWT, REST API

---

## License 📄

This project is licensed under the MIT License.
