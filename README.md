# Assignment Workflow & Submission Tracking System

## 📌 Overview

This project is a backend system developed using Node.js, Express.js, and MongoDB.
It allows instructors to create assignments and students to submit them before deadlines.
The system manages assignment lifecycle, submissions, and status tracking.

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 🚀 Features

* Create, update, and delete assignments
* Retrieve all assignments
* Submit assignments before deadline
* Prevent submissions after due date
* View submissions of a specific assignment
* Middleware for logging API requests

---

## 🏗️ Project Structure

```
assignment-system/
│
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── Assignment.js
│   └── Submission.js
├── controllers/
│   └── assignmentController.js
├── routes/
│   └── assignmentRoutes.js
└── package.json
```

---

## ▶️ How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start MongoDB server

3. Run the project:

```bash
npm run dev
```

4. Server will run at:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### Assignment APIs

* POST `/api/assignments` → Create assignment
* GET `/api/assignments` → Get all assignments
* PUT `/api/assignments/:id` → Update assignment
* DELETE `/api/assignments/:id` → Delete assignment

### Submission APIs

* POST `/api/assignments/:id/submit` → Submit assignment
* GET `/api/assignments/:id/submissions` → Get submissions

---

## 🧪 Testing

All APIs are tested using Postman.

---

## 📋 Example Request

### Create Assignment

```json
{
  "title": "Math Assignment",
  "subject": "Math",
  "description": "Integration problems",
  "dueDate": "2026-05-01"
}
```

---

## ✅ Validation Rules

* Submissions are allowed only before due date
* Late submissions are rejected with an error message

---

## 🎯 Conclusion

This project demonstrates how a backend system manages assignment workflows, submission tracking, and deadline validation using REST APIs and MongoDB.
