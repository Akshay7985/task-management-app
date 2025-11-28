import React from "react";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";

const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const getStatusBadgeClass = () => {
    switch (task.status) {
      case "completed":
        return "bg-success";
      case "in-progress":
        return "bg-warning text-dark";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{task.title}</h5>
          <span className={`badge ${getStatusBadgeClass()}`}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>

        {task.description && (
          <p className="card-text text-muted" style={{ flexGrow: 1 }}>
            {task.description.length > 80
              ? task.description.slice(0, 80) + "..."
              : task.description}
          </p>
        )}

        {task.dueDate && (
        <small className="text-muted d-block mb-2">
            Due: {new Date(task.dueDate).toLocaleDateString()}
        </small>
        )}


        <div className="d-flex justify-content-end gap-2 mt-auto">
          <button className="btn btn-sm btn-outline-success" onClick={onToggleStatus}>
            <FaCheckCircle />{" "}
            {task.status === "completed" ? "Mark Pending" : "Complete"}
          </button>

          <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
            <FaEdit /> Edit
          </button>

          <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
