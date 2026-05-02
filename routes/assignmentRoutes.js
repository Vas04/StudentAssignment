const express = require("express");
const router = express.Router();
const controller = require("../controllers/assignmentController");

router.post("/", controller.createAssignment);
router.get("/", controller.getAssignments);
router.put("/:id", controller.updateAssignment);
router.delete("/:id", controller.deleteAssignment);

router.post("/:id/submit", controller.submitAssignment);
router.get("/:id/submissions", controller.getSubmissions);

module.exports = router;