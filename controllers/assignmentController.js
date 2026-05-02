const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

// Create Assignment
exports.createAssignment = async (req, res) => {
  const data = await Assignment.create(req.body);
  res.json(data);
};

// Get All
exports.getAssignments = async (req, res) => {
  const data = await Assignment.find();
  res.json(data);
};

// Submit Assignment
exports.submitAssignment = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);

  if (!assignment) return res.status(404).json({ msg: "Not found" });

  // 🔥 FIXED COMPARISON
  const currentDate = new Date();
  const dueDate = new Date(assignment.dueDate);

  if (currentDate > dueDate) {
    return res.status(400).json({ msg: "Deadline passed" });
  }

  const submission = await Submission.create({
    assignmentId: assignment._id,
    ...req.body
  });

  res.json(submission);
};

// Get Submissions
exports.getSubmissions = async (req, res) => {
  const data = await Submission.find({
    assignmentId: req.params.id
  });
  res.json(data);
};

// Update
exports.updateAssignment = async (req, res) => {
  const data = await Assignment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

// Delete
exports.deleteAssignment = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};