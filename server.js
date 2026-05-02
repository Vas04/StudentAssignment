const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// DB
connectDB();

// ✅ ADD THIS
const assignmentRoutes = require("./routes/assignmentRoutes");
console.log("TYPE:", typeof assignmentRoutes); // debug

app.use("/api/assignments", assignmentRoutes);

app.get("/", (req, res) => {
  res.send("Server OK");
});

app.listen(5000, () => console.log("Server running"));


// http://localhost:5000/api/assignments

// {
//   "title": "Test Assignment",
//   "subject": "Math",
//   "description": "Test",
//   "dueDate": "2026-05-05"
// }


// http://localhost:5000/api/assignments


// http://localhost:5000/api/assignments/PASTE_ID/submit


// {
//   "studentName": "Rahul",
//   "content": "Answers"
// }


// http://localhost:5000/api/assignments/PASTE_ID/submissions


// [
//   {
//     "studentName": "Rahul",
//     "content": "Answers"
//   }
// ]


// http://localhost:5000/api/assignments


// {
//   "title": "Old Assignment",
//   "subject": "Math",
//   "description": "Old",
//   "dueDate": "2024-01-01"
// }


// http://localhost:5000/api/assignments/OLD_ID/submit

// {
//   "studentName": "Rahul",
//   "content": "Answers"
// }

// {
//   "msg": "Deadline passed"
// }

//PUT http://localhost:5000/api/assignments/PASTE_ID
//{
 // "title": "Updated Title"
//}

// DELETE http://localhost:5000/api/assignments/PASTE_ID