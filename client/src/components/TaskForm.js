import React, { useEffect, useState } from "react";

const initialFormState = {
  title: "",
  description: "",
  status: "pending",
  dueDate: "",
};

const TaskForm = ({ onAddTask, onUpdateTask, selectedTask, clearSelectedTask }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (selectedTask) {
      setFormData(selectedTask);
    } else {
      setFormData(initialFormState);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (selectedTask) {
      onUpdateTask(formData);
    } else {
      onAddTask(formData);
    }

    setFormData(initialFormState);
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    clearSelectedTask();
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">
          {selectedTask ? "Edit Task" : "Add New Task"}
        </h5>

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label className="form-label">Title *</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="2"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description (optional)"
            />
          </div>

          <div className="col-md-4 col-12">
            <label className="form-label">Status</label>
            <select
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="col-md-4 col-12">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="form-control"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 d-flex gap-2 mt-2">
            <button type="submit" className="btn btn-primary">
              {selectedTask ? "Update Task" : "Add Task"}
            </button>
            {selectedTask && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
