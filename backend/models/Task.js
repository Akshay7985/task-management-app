const mongoose = require("mongoose");

// Define the Task schema
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,                // removes extra spaces from start/end
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],  // allowed values only
      default: "pending",
    },
    dueDate: {
      type: Date,                // stores date for deadline
    },
    // (optional) Link task to a user (for later auth features)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,            // automatically adds createdAt & updatedAt
  }
);

// Create and export the Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
