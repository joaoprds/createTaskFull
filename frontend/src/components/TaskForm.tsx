import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface TaskFormProps {
  onSubmit: (task: { title: string; description?: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { t } = useTranslation(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder={t("taskTitle")} 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <textarea
          placeholder={t("taskDescription")} 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {t("addTaskButton")} 
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
