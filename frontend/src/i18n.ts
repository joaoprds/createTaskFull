import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            title: "Task Manager",
            addTask: "Add Task",
            searchById: "Search Task by ID",
            confirmDelete: "Confirm Deletion",
            confirmUpdate: "Confirm Update",
            cancel: "Cancel",
            confirm: "Confirm",
            loading: "Loading tasks...",
            noTasks: "No tasks found.",
            "taskTitle": "Task Title",
            "taskDescription": "Description (optional)",
            "addTaskButton": "Add Task",
            "id": "ID",
            "title1": "Title",
            "completed": "Completed",
            "actions": "Actions",
            "yes": "Yes",
            "no": "No",
            "complete": "Complete",
            "unmark": "Unmark",
            "delete": "Delete",
            "searchByIdButton":"Search by ID",
            "taskCreated": "Task Created with Success",
            "taskDeleted": "Task Deleted with Success"
        },
    },
    pt: {
        translation: {
            title: "Gerenciador de Tarefas",
            addTask: "Adicionar Tarefa",
            searchById: "Buscar Tarefa por ID",
            confirmDelete: "Confirmar Exclusão",
            confirmUpdate: "Confirmar Atualização",
            cancel: "Cancelar",
            confirm: "Confirmar",
            loading: "Carregando tarefas...",
            noTasks: "Nenhuma tarefa encontrada.",
            "taskTitle": "Título da tarefa",
            "taskDescription": "Descrição (opcional)",
            "addTaskButton": "Adicionar Tarefa",
            "id": "ID",
            "title1": "Título",
            "completed": "Concluída",
            "actions": "Ações",
            "yes": "Sim",
            "no": "Não",
            "complete": "Concluir",
            "unmark": "Desmarcar",
            "delete": "Excluir",
            "searchByIdButton": "Pesquisar por ID",
            "taskCreated": "Tarefa criada com sucesso !",
            "taskDeleted": "Tarefa excluida com sucesso !"
        },
    },
    es: {
        translation: {
            title: "Gestor de Tareas",
            addTask: "Agregar Tarea",
            searchById: "Buscar Tarea por ID",
            confirmDelete: "Confirmar Eliminación",
            confirmUpdate: "Confirmar Actualización",
            cancel: "Cancelar",
            confirm: "Confirmar",
            loading: "Cargando tareas...",
            noTasks: "No se encontraron tareas.",
            "taskTitle": "Título de la tarea",
            "taskDescription": "Descripción (opcional)",
            "addTaskButton": "Agregar Tarea",
            "id": "ID",
            "title1": "Título",
            "completed": "Concluida",
            "actions": "Acciones",
            "yes": "Sí",
            "no": "No",
            "complete": "Concluir",
            "unmark": "Desmarcar",
            "delete": "Eliminar",
            "searchByIdButton": "Buscar Tarea por ID",
            "taskCreated": "¡Tarea creada exitosamente!",
            "taskDeleted": "¡Tarea eliminada exitosamente!"
        },
    },
};

i18n
    .use(LanguageDetector) 
    .use(initReactI18next) 
    .init({
        resources,
        fallbackLng: "es", 
        interpolation: {
            escapeValue: false, 
        },
    });

export default i18n;
