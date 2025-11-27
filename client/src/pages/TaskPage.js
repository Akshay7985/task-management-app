import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

const TaskPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest"); // 'newest' | 'oldest' | 'dueDate'
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch tasks when page loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        if (err.response?.status === 401) {
          setError("Unauthorized. Please login again (invalid or missing token).");
        } else {
          setError("Failed to load tasks. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add new task (POST)
  const handleAddTask = async (task) => {
    try {
      setLoading(true);
      setError("");
      const newTask = await createTask(task);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      console.error("Error creating task:", err);
      setError("Failed to create task.");
    } finally {
      setLoading(false);
    }
  };

  // Update existing task (PUT)
  const handleUpdateTask = async (updatedTask) => {
    try {
      setLoading(true);
      setError("");
      const savedTask = await updateTask(updatedTask._id, updatedTask);
      setTasks((prev) =>
        prev.map((task) => (task._id === savedTask._id ? savedTask : task))
      );
      setSelectedTask(null);
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Failed to update task.");
    } finally {
      setLoading(false);
    }
  };

  // Delete task (DELETE)
  const handleDeleteTask = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this task?");
    if (!ok) return;

    try {
      setLoading(true);
      setError("");
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle completed status (uses PUT)
  const handleToggleStatus = async (task) => {
    const newStatus = task.status === "completed" ? "pending" : "completed";
    const updated = { ...task, status: newStatus };

    try {
      setLoading(true);
      setError("");
      const savedTask = await updateTask(task._id, updated);
      setTasks((prev) =>
        prev.map((t) => (t._id === savedTask._id ? savedTask : t))
      );
    } catch (err) {
      console.error("Error toggling status:", err);
      setError("Failed to update task status.");
    } finally {
      setLoading(false);
    }
  };

  // 1) Filter by status
const statusFiltered =
  filterStatus === "all"
    ? tasks
    : tasks.filter((task) => task.status === filterStatus);

// 2) Filter by search term (title)
const searchFiltered = statusFiltered.filter((task) =>
  task.title.toLowerCase().includes(searchTerm.toLowerCase())
);

// 3) Sort
const sortedTasks = [...searchFiltered].sort((a, b) => {
  if (sortOption === "newest") {
    // newest createdAt first
    return new Date(b.createdAt) - new Date(a.createdAt);
  }
  if (sortOption === "oldest") {
    return new Date(a.createdAt) - new Date(b.createdAt);
  }
  if (sortOption === "dueDate") {
    // tasks with no dueDate go last
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  }
  return 0;
});


  return (
  <div className="container mb-4">

    {/* 🔍 Filter + Sort + Search UI */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-3">
      <h2 className="mb-0">My Tasks</h2>

      <div className="d-flex flex-column flex-md-row gap-2 w-100 w-md-auto">

        {/* Status Filter */}
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        {/* Sorting */}
        <select
          className="form-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="dueDate">Due Date (Closest First)</option>
        </select>

        {/* Search */}
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>

    {/* ❗ Error Message */}
    {error && (
      <div className="alert alert-danger py-2" role="alert">
        {error}
      </div>
    )}

    {/* ⏳ Loading Indicator */}
    {loading && (
      <div className="d-flex align-items-center gap-2 mb-3">
        <div className="spinner-border spinner-border-sm" role="status" />
        <span>Loading...</span>
      </div>
    )}

    {/* ➕ Add / Edit Task Form */}
    <TaskForm
      onAddTask={handleAddTask}
      onUpdateTask={handleUpdateTask}
      selectedTask={selectedTask}
      clearSelectedTask={() => setSelectedTask(null)}
    />

    {/* 📌 Task List */}
    <div className="row mt-4">

      {/* No tasks message */}
      {sortedTasks.length === 0 && !loading && !error && (
        <p className="text-muted">No tasks found. Create your first task!</p>
      )}

      {/* Render Tasks */}
      {sortedTasks.map((task) => (
        <div key={task._id} className="col-12 col-md-6 col-lg-4 mb-3">
          <TaskItem
            task={task}
            onEdit={() => setSelectedTask(task)}
            onDelete={() => handleDeleteTask(task._id)}
            onToggleStatus={() => handleToggleStatus(task)}
          />
        </div>
      ))}
    </div>
  </div>
);

};

export default TaskPage;
