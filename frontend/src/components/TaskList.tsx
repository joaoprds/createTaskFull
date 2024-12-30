import React from "react";
import { useTranslation } from "react-i18next";

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onUpdate: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-6 py-4 text-left text-gray-700">{t("id")}</th>
            <th className="border border-gray-300 px-6 py-4 text-left text-gray-700">{t("title1")}</th>
            <th className="border border-gray-300 px-6 py-4 text-left text-gray-700">{t("completed")}</th>
            <th className="border border-gray-300 px-6 py-4 text-left text-gray-700">{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={task._id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-6 py-4">{task._id}</td>
              <td className="border border-gray-300 px-6 py-4">{task.title}</td>
              <td className="border border-gray-300 px-6 py-4">
                {task.completed ? t("yes") : t("no")}
              </td>
              <td className="border border-gray-300 px-6 py-4 flex space-x-4">
                <button
                  onClick={() => onUpdate(task._id, task.completed)}
                  className={`px-4 py-2 rounded ${
                    task.completed
                      ? "bg-yellow-500 text-white hover:bg-yellow-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {task.completed ? t("unmark") : t("complete")}
                </button>
                <button
                  onClick={() => onDelete(task._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  {t("delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
