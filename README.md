# CipherSQLStudio

CipherSQLStudio is a browser-based SQL learning platform where users can practice SQL queries against predefined assignments.

## Tech Stack

Frontend:
- React.js
- Monaco Editor
- SCSS

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL (query execution sandbox)
- MongoDB Atlas (assignment storage)

LLM:
- OpenAI API for hint generation

---

## Features

- SQL editor using Monaco
- Execute SQL queries in real time
- Display query results
- AI-powered hint system
- Secure query validation


---

## Project Setup

### 1. Clone the repository
git clone https://github.com/sakshipawar29/ciphersqlstudio.git


---

### 2. Backend Setup
-cd backend
-npm install

-Create `.env`:- 
PORT=5000
MONGO_URI=your_mongo_uri
POSTGRES_URI=postgres://postgres:password@localhost:5432/ciphersql
OPENAI_API_KEY=your_api_key

-Run backend:
npx nodemon server.js


---

### 3. Frontend Setup
-cd frontend
-npm install
-npm start
-App runs at: http://localhost:3000


---

## Data Flow

User writes SQL query  
↓  
React sends API request `/api/query/execute`  
↓  
Express backend receives query  
↓  
Query validated and sent to PostgreSQL  
↓  
PostgreSQL returns results  
↓  
Backend sends JSON response  
↓  
React renders results table

---

## Author
Sakshi