import React, { useState, useEffect } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  getTaskById,
  updateTaskById,
} from "../services/TaskService";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next"; // Importing i18next hook
import "react-toastify/dist/ReactToastify.css";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [taskId, setTaskId] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState<null | { id: string; action: "delete" | "update"; completed?: boolean }>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      toast.error(t("loadingError"));
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (task: { title: string; description?: string }) => {
    try {
      await createTask(task);
      toast.success(t("taskCreated"));
      loadTasks();
    } catch {
      toast.error(t("taskCreationError"));
    }
  };

  const confirmAction = async () => {
    if (modalAction) {
      const { id, action, completed } = modalAction;
      try {
        if (action === "delete") {
          await deleteTask(id);
          toast.success(t("taskDeleted"));
        } else if (action === "update") {
          await updateTaskById(id, { completed: !completed });
          toast.success(t(!completed ? "taskCompleted" : "taskUnmarked"));
        }
        loadTasks();
      } catch {
        toast.error(t("actionError"));
      } finally {
        setShowModal(false);
        setModalAction(null);
      }
    }
  };

  const handleUpdate = (id: string, completed: boolean) => {
    setModalAction({ id, action: "update", completed });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    setModalAction({ id, action: "delete" });
    setShowModal(true);
  };

  const handleGetTaskById = async () => {
    try {
      if (!taskId.trim()) {
        toast.warn(t("invalidId"));
        return;
      }
      const task = await getTaskById(taskId);
      setSelectedTask(task);
      toast.info(t("taskFound"));
    } catch {
      toast.error(t("taskSearchError"));
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </header>

      <TaskForm onSubmit={handleCreate} />

      <div className="space-y-4">
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          placeholder={t("searchById")}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleGetTaskById}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          {t("searchByIdButton")}
        </button>
      </div>

      {selectedTask && (
        <div className="mt-6 p-4 bg-gray-100 shadow rounded">
          <h2 className="text-xl font-bold mb-2">{t("taskDetails")}</h2>
          <p><strong>{t("id")}:</strong> {selectedTask._id}</p>
          <p><strong>{t("title")}:</strong> {selectedTask.title}</p>
          <p><strong>{t("description")}:</strong> {selectedTask.description || t("noDescription")}</p>
          <p><strong>{t("completed")}:</strong> {selectedTask.completed ? t("yes") : t("no")}</p>
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500">{t("loadingTasks")}</p>
      ) : (
        <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
      )}

      {showModal && (
        <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold">
              {modalAction?.action === "delete" ? t("confirmDelete") : t("confirmUpdate")}
            </h3>
            <p className="text-black">
              {t("confirmAction", { action: modalAction?.action === "delete" ? t("delete") : t("update") })}
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                {t("cancel")}
              </button>
              <button
                onClick={confirmAction}
                className={`px-4 py-2 rounded ${
                  modalAction?.action === "delete"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {t("confirm")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPage;
