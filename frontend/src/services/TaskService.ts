import axiosInstance from "../utils/axiosInstance";

export const getTasks = async () => {
  const response = await axiosInstance.get("/api/tasks");
  return response.data;
};

export const createTask = async (task: { title: string; description?: string }) => {
  const response = await axiosInstance.post("/api/tasks", task);
  return response.data;
};

export const updateTaskById = async (id: string, updates: { title?: string; description?: string; completed?: boolean }) => {
  const response = await axiosInstance.put(`/api/tasks/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axiosInstance.delete(`/api/tasks/${id}`);
  return response.data;
};

export const getTaskById = async (id: string) => {
  const response = await axiosInstance.get(`/api/tasks/${id}`);
  return response.data;
};
