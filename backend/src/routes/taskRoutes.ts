import { Router } from 'express';
import { body } from 'express-validator';
import authMiddleware from "../middleware/authMiddleware";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controller/taskController';

const router: Router = Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtiene todas las tareas
 *     responses:
 *       200:
 *         description: Lista de tareas.
 */
router.get('/', authMiddleware, getTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *           example:
 *             title: "Mi nueva tarea"
 *             description: "Descripción opcional de la tarea"
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 */
router.post(
  '/',
  [
    authMiddleware,
    body('title').notEmpty().withMessage('Title is required'),
  ],
  createTask
);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada.
 *       404:
 *         description: Tarea no encontrada.
 */
router.get('/:id', authMiddleware, getTaskById);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualiza una tarea
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *           example:
 *             title: "Tarea actualizada"
 *             description: "Descripción actualizada"
 *             completed: true
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.put('/:id', authMiddleware, updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 */
router.delete('/:id', authMiddleware, deleteTask);

export default router;
