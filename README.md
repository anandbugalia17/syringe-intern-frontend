# Syringe Intern — Frontend

React frontend for an asynchronous background task processing demo, built with **React**, **Vite**, and **Tailwind CSS**. It talks to the Syringe Intern Backend (Express + MongoDB + QStash) to trigger jobs and poll their status in real time.

---

## ✨ Features

- Trigger a background job with a single click
- Real-time status updates via polling (`Pending → Processing → Completed`)
- Clean, responsive UI styled with Tailwind CSS
- Simple `.env`-based configuration to point at any backend URL

---

## 🧱 Tech Stack

| Layer      | Technology        |
|------------|--------------------|
| Framework  | React (Vite)       |
| Styling    | Tailwind CSS v4     |
| HTTP       | Fetch / Axios       |
| State      | React Hooks         |

---

## 📋 Prerequisites

- Node.js v18 or higher
- npm
- The backend server running locally or deployed (handles job creation, MongoDB storage, and QStash webhooks)

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

\`\`\`env
VITE_BACKEND_URL=http://localhost:5000
\`\`\`

| Variable            | Description                              |
|---------------------|-------------------------------------------|
| `VITE_BACKEND_URL`  | Base URL of the backend API server         |

---

## 🚀 Setup & Run

**1. Clone the repository**
\`\`\`bash
git clone <your-repo-url>
cd syringe-intern-frontend
\`\`\`

**2. Install dependencies**
\`\`\`bash
npm install
\`\`\`

**3. Configure environment variables**

Create a `.env` file as shown above.

**4. Start the dev server**
\`\`\`bash
npm run dev
\`\`\`

**5. Open in browser**
\`\`\`
http://localhost:5173
\`\`\`

---

## 🔄 How It Works

1. User clicks **Start Task** on the frontend.
2. Frontend sends a `POST` request to `/api/jobs/start` on the backend.
3. Backend creates a job in MongoDB, returns a unique `jobId`, and queues the task via QStash.
4. Frontend begins polling `GET /api/jobs/:jobId` every 2 seconds.
5. QStash triggers a webhook on the backend, which processes the job and updates its status in MongoDB.
6. Frontend reflects the live status: `Pending → Processing → Completed`.

\`\`\`
User → Start Task → Backend → MongoDB → QStash → Webhook
                                                    │
                                                    ▼
Frontend (polling) ← Status Update ← MongoDB Update
\`\`\`

---

## 📁 Project Structure

\`\`\`
syringe-intern-frontend/
├── src/
│   ├── components/     # UI components (task button, status display, etc.)
│   ├── hooks/          # Custom hooks (e.g. usePolling)
│   ├── api/            # API request helpers
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
└── vite.config.js
\`\`\`

---

## 🧪 Available Scripts

| Command           | Description                     |
|--------------------|----------------------------------|
| `npm run dev`      | Start the development server     |
| `npm run build`    | Build for production             |
| `npm run preview`  | Preview the production build     |

---

## 🔗 Related Repositories

- **Backend:** syringe-intern-backend — Express, MongoDB, Mongoose, and QStash integration

---

## 👤 Author

**Anand Bugalia**
IIT Kanpur

---
