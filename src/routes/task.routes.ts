import {Router} from 'express';

import {createTask, deleteTask, getTask, getTasks, updateTask} from '../controllers/task.controller'

const router = Router();

/**
 * @swagger
 * components: 
 *  schemas:
 *      Task:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of task
 *              name:
 *                  type: string
 *                  description: the name of the task
 *              description:
 *                  type: string
 *                  description: the description of the task
 *          require:
 *              - name
 *              - description
 *          example:
 *              id: 4FUSZxaUmvwUO9ydG3W4J
 *              name: some task
 *              description: to do a program
 *      taskId: 
 *         in: path
 *         name: id    
 *         required: true
 *         schema:
 *             type: string
 *         description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: return a task list
 *      tags: [/Tasks]
 *      responses: 
 *          200: 
 *              description: the list of tasks
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: create a new task
 *      tags: [/Tasks]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      responses: 
 *          500:
 *              description:  error
 *          200: 
 *              description: creation of a task
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 */
router.post('/tasks', createTask);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *      summary: return a task
 *      tags: [/Tasks]
 *      parameters:
 *          - $ref: '#/components/schemas/taskId'
 *      responses: 
 *          200: 
 *              description: get a task by id
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          404:
 *              description: task not found
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *      summary: delete a task
 *      tags: [/Tasks]
 *      parameters:
 *          - $ref: '#/components/schemas/taskId'
 *      responses: 
 *          200: 
 *              description: return the task deleted
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          404:
 *              description: task not found
 */
router.delete('/tasks/:id', deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *      summary: update a task
 *      tags: [/Tasks]
 *      parameters:
 *          - $ref: '#/components/schemas/taskId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      responses: 
 *          200: 
 *              description: return the task updated
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          404:
 *              description: task not found
 */
router.put('/tasks/:id', updateTask);
// router.get('/tasks/count', );

export default router;