import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao obter tarefas");
  }
};

export const getTaskById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao obter tarefa");
  }
};

export const createTask = async (task: { title: string; description?: string }) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao criar tarefa");
  }
};

export const updateTaskById = async (id: string, updates: { title?: string; description?: string; completed?: boolean }) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updates);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao atualizar tarefa");
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao excluir tarefa");
  }
};
