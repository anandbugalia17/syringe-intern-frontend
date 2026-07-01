# Syringe Intern Frontend

React frontend for the async task processing demo built with Vite and Tailwind CSS.

## Tech Stack

- React + Vite
- Tailwind CSS v4

## Prerequisites

- Node.js v18+
- Backend server running (syringe-intern-backend)

## Environment Variables

Create a `.env` file in the root:
VITE_BACKEND_URL=http://localhost:5000
## Setup & Run

1. Clone the repository
\`\`\`
git clone <your-repo-url>
cd syringe-intern-frontend
\`\`\`

2. Install dependencies
\`\`\`
npm install
\`\`\`

3. Start the dev server
\`\`\`
npm run dev
\`\`\`

4. Open browser at
\`\`\`
http://localhost:5173
\`\`\`

## How it works

- Click **Start Task** to trigger a background job
- Frontend polls backend every 2 seconds for status updates
- Status updates in real time: Pending → Processing → Completed
##  Author
**Anand Bugalia**<br>
IIT Kanpur