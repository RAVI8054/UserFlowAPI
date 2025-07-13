# UserFlowAPI
## 📌 Overview
UserFlowAPI is a RESTful API built with **Node.js** and **Express.js** that allows for managing a list of users. This project was developed as part of a backend assignment to practice routing, middleware, validation, and error handling.
---
## Features
- Retrieve all users
- Retrieve user by ID
- Add new user with validation
- Update existing user with validation
- Delete user by ID
- Middleware for logging each request with method, URL, and status code
- Error handling with appropriate HTTP status codes and messages
 ---
## API Endpoints
- GET `/users` - List all users
- GET `/users/:id` - Get user by ID
- POST `/user` - Create user (requires JSON body with firstName, lastName, hobby)
- PUT `/user/:id` - Update user (requires JSON body with firstName, lastName, hobby)
- DELETE `/user/:id` - Delete user by ID

  ---
## Middleware
 - Logs each request method, URL, and status code
 - Validates required fields on POST and PUT
  
  ---
  ## - [❗ Error Handling]
- Returns 400 for missing fields
- Returns 404 for user not found
- Returns 201 for successful creation
- Returns 200 for successful fetch, update, or delete
---
## Testing
Tested using ThunderClient with screenshots included in the submission document.
--- 
## project st
UserFlowAPI/
## 📁Project Structure
```
UserFlowAPI/
├── controllers/
│   └── users.controller.js
├── middleware/
│   └── users.middleware.js
├── models/
│   └── users.model.js
├── routes/
│   └── users.routes.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
```
---
##🚀Getting Started
### 📁 Prerequisites
- Node.js (v14+ recommended)
- npm
### 🔧 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RAVI8054/UserFlowAPI.git
   cd UserFlowAPI
2. Install dependencies:
   ```bash
   npm install 
3. Start the server:
   ```bash
   npm run start
---


