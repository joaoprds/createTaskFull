import { Router } from 'express';
import { body } from 'express-validator';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controller/taskController';

const router: Router = Router();

router.post(
  '/',
  [body('title').notEmpty().withMessage('Title is required')],
  createTask
);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtiene todas las tareas
 *     responses:
 *       200:
 *         description: Lista de tareas.
 */
router.get('/', getTasks);

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
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 */
router.post('/', createTask);

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
 */
router.get('/:id', getTaskById);

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
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 */
router.put('/:id', updateTask);

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
 */
router.delete('/:id', deleteTask);

export default router;
