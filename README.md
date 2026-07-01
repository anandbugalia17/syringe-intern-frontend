# syringe-intern-frontend

React + Vite frontend for the async task processing demo. 
Connects to syringe-intern-backend and displays real-time 
job status updates via polling.

## Tech Stack

- React (Vite)
- Tailwind CSS v4

## Prerequisites

- Node.js v18+
- syringe-intern-backend running on port 5000

## Environment Variables

Create a `.env` file in the root directory:
VITE_BACKEND_URL=http://localhost:5000
## Installation & Setup

### Step 1: Clone the repository
git clone https://github.com/anandbugalia17/syringe-intern-frontend.git
cd syringe-intern-frontend
### Step 2: Install dependencies
npm install
### Step 3: Make sure backend is running
Start the backend first (see syringe-intern-backend README).
Both QStash dev server and Express server must be running.

### Step 4: Start the frontend
npm run dev
### Step 5: Open in browser
http://localhost:5173
## How it works

1. Click **Start Task** button
2. Frontend calls `POST /api/jobs/start` on backend
3. Backend creates job and queues it to QStash
4. Frontend starts polling `GET /api/jobs/:jobId` every 2 seconds
5. Status updates in real time on screen:
⏳ Pending → ⚙️ Processing → ✅ Completed
6. Polling stops automatically when job completes or fails

## Component Structure
App.jsx
├── startJob()     → triggers job creation
├── pollStatus()   → polls every 2 seconds
└── UI renders     → status, jobId, timestamps
## Author
 **Anand Bugalia**  <br>
IIT Kanpur 