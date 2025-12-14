🍫 Sweet Shop Management System

A modern full-stack web application for managing and purchasing sweets, featuring role-based access, cart functionality, and a polished UI/UX.

🔗 Live Demo: https://incubyte-assignment-nu.vercel.app
🔗 Backend API: https://incubyte-assignment-a29f.onrender.com

⸻

✨ Features

👤 Authentication & Authorization
	•	User Registration & Login (JWT based)
	•	Role-based access (Admin / User)
	•	Protected routes

🛒 User Features
	•	Browse sweets with:
	•	Search by name
	•	Filter by category
	•	Price range filtering
	•	Add/remove items from cart
	•	Update quantities with real-time stock validation
	•	Dedicated cart page

🛠️ Admin Features
	•	Add new sweets
	•	Update price & restock quantity
	•	Delete sweets
	•	Promote users to admin (via email)
	•	Admin dashboard with maintenance-focused UX

🎨 UI / UX
	•	Floating & scroll-aware navbar
	•	Modern glassmorphism design
	•	Gradient backgrounds with decorative elements
	•	Loading states & transitions
	•	Responsive design (mobile-first)

⸻

🧱 Tech Stack

Frontend
	•	React (Vite)
	•	Tailwind CSS
	•	React Router
	•	Context API (Cart management)

Backend
	•	Node.js
	•	Express.js
	•	MongoDB Atlas
	•	JWT Authentication

Deployment
	•	Frontend: Vercel
	•	Backend: Render
	•	Database: MongoDB Atlas

⸻

📁 Project Structure

incubyte_assignment/
│
├── backend/              # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
├── public/               # Static assets
│
├── src/                  # React frontend
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   └── utils/
│
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── package.json


⸻

🚀 Getting Started (Local Setup)

1️⃣ Clone the repository

git clone https://github.com/your-username/incubyte_assignment.git
cd incubyte_assignment

2️⃣ Backend Setup

cd backend
npm install

Create .env:

MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key

Run backend:

npm start


⸻

3️⃣ Frontend Setup

cd ..
npm install

Create .env:

VITE_API_URL=http://localhost:5000/api

Run frontend:

npm run dev


⸻

🌐 Deployment Notes
	•	Frontend deployed on Vercel
	•	Backend deployed on Render
	•	MongoDB Atlas used for cloud database
	•	CORS configured to allow deployed frontend
	•	React Router handled via vercel.json rewrites

⸻

🤖 AI Assistance Disclosure

This project was developed with the assistance of AI tools (ChatGPT) for:
	•	UI/UX design ideation
	•	Code structuring guidance
	•	Debugging support
	•	Deployment troubleshooting

All architectural decisions, implementations, and final integrations were reviewed, adapted, and implemented by the developer to ensure correctness, maintainability, and understanding.

⸻

📌 Key Learnings
	•	Full-stack authentication flow
	•	Role-based authorization
	•	Cart & state management
	•	Production deployment & CORS handling
	•	Real-world debugging (CORS, assets, routing)
	•	UI/UX consistency across pages

⸻

👨‍💻 Author

Sahil Wadhwa
Full-Stack Developer

⸻

📄 License

This project is for educational and assessment purposes.
