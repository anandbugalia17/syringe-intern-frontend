# Syringe Intern Frontend

A React-based frontend application for an asynchronous job processing system. The application communicates with an Express backend to create background jobs, monitor their execution, and display live status updates using polling.

---

## Features

- Start asynchronous background jobs
- Real-time job status tracking
- Automatic polling every 2 seconds
- Responsive user interface
- Loading and status indicators
- Handles Pending, Processing, Completed, and Failed states

---

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- JavaScript (ES6+)
- Fetch API

---

## Project Structure

```
src/
├── components/
├── App.jsx
├── main.jsx
└── index.css
```

---

## Prerequisites

- Node.js v18 or later
- npm
- Backend server running locally

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/anandbugalia17/syringe-intern-frontend.git
```

Navigate to the project directory

```bash
cd syringe-intern-frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## API Integration

The frontend communicates with the following backend endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/jobs/start` | Creates a new background job |
| GET | `/api/jobs/:jobId` | Retrieves the current status of a job |

---

## Workflow

1. User clicks **Start Job**.
2. Frontend sends a request to the backend.
3. Backend creates a new job and returns a unique Job ID.
4. Frontend periodically polls the backend every two seconds.
5. The UI updates automatically as the job progresses through:

```
Pending → Processing → Completed
```

---

## Screenshots

You can add screenshots here after completing the UI.

Example:

```
screenshots/
├── home.png
├── processing.png
└── completed.png
```

---

## Future Improvements

- Progress bar
- Toast notifications
- Dark mode
- Job history
- Better error handling

---

## Author

**Anand Bugalia**

B.Tech, IIT Kanpur