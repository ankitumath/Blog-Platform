# 📝 Blog Platform

A full-stack Blog Platform built using the MERN Stack (MongoDB, Express.js, React, Node.js). Users can register, log in, create blogs, edit or delete their own posts, and interact with blogs through comments.

## 🚀 Features

Backend Link : https://blog-platform-qv7y.onrender.com

Frontend Link : https://blog-platform-dusky-pi.vercel.app/

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Encryption using bcrypt

### Blog Management
- Create Blog Posts
- Edit Blog Posts
- Delete Blog Posts
- View All Blogs
- View Individual Blog

### Comments
- Add Comments
- View Comments
- Delete Own Comments (Optional)

### User Experience
- Responsive UI
- React Router Navigation
- Loading Indicators
- Error Handling
- Toast Notifications

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

## 📂 Project Structure


Blog-Platform/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md


---

## ⚙️ Installation

### Clone Repository

bash
git clone https://github.com/ankitumath/Blog-Platform.git
cd Blog-Platform


---

## Backend Setup

Navigate to backend folder

bash
cd backend


Install dependencies

bash
npm install


Create a `.env` file

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start backend

bash
npm run dev


Backend will run at


http://localhost:5000


---

## Frontend Setup

Navigate to frontend

bash
cd frontend


Install dependencies

bash
npm install


Create a `.env` file

env
VITE_API_URL=http://localhost:5000/api


Start frontend

bash
npm run dev


Frontend will run at


http://localhost:5173


---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Blogs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/blogs | Get All Blogs |
| GET | /api/blogs/:id | Get Single Blog |
| POST | /api/blogs | Create Blog |
| PUT | /api/blogs/:id | Update Blog |
| DELETE | /api/blogs/:id | Delete Blog |

### Comments

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/comments/:blogId | Get Blog Comments |
| POST | /api/comments | Add Comment |
| DELETE | /api/comments/:id | Delete Comment |

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Login Page
- Register Page
- Create Blog Page
- Blog Details Page
- Comments Section

---

## 🚀 Deployment

### Frontend

- Vercel

### Backend

- Render

Remember to update the frontend environment variable after deployment.

env
VITE_API_URL=https://your-backend-url.onrender.com/api


---

## 🔒 Environment Variables

Backend

env
PORT
MONGO_URI
JWT_SECRET


Frontend

env
VITE_API_URL


---

## 📚 Learning Outcomes

This project demonstrates:

- REST API Development
- JWT Authentication
- React Context API
- CRUD Operations
- MongoDB Database Integration
- Express Middleware
- MERN Stack Architecture
- Client-Server Communication
- Protected Routes
- Full Stack Deployment

---

## 👨‍💻 Author

**Ankit Bana**

GitHub: https://github.com/ankitumath

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.