const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task (Protected)
router.post("/", authMiddleware, createTask);

// Get All Tasks (you can protect this too if you want)
router.get("/", authMiddleware, getTasks);

// Update Task (Protected)
router.put("/:id", authMiddleware, updateTask);

// Delete Task (Protected)
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
