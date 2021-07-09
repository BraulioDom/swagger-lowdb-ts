import {Handler} from 'express';
import {nanoid} from 'nanoid';

import {getConnection} from '../db';

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value();
    return res.json(data);
}

export const createTask: Handler = (req, res) => {
    const {name, description} = req.body;

    const newTask = {
        id: nanoid(),
        name, 
        description,
    }

    try {
        getConnection().get('tasks').push(newTask).write();
        res.json(newTask);
    } catch (error) {
        res.status(500);   
    }
}

export const getTask: Handler = (req, res) => {
    const task = getConnection()
            .get('tasks')
            .find({id: req.params.id})
            .value();

    if(!task) res.status(404);
    res.json(task);
}

export const deleteTask: Handler = (req, res) => {
    const task = getConnection()
            .get('tasks')
            .find({id: req.params.id})
            .value();

    if(!task){
        res.status(404);
    }

    const deletedTask = getConnection()
            .get('tasks')
            .remove({id: req.params.id})
            .write();

    res.json(deletedTask[0]);

}

export const updateTask: Handler = (req, res) => {
    const task = getConnection()
            .get('tasks')
            .find({id: req.params.id})
            .value();
    
    if(!task) res.status(404);

    const updatedTask = getConnection()
            .get('tasks')
            .find({id: req.params.id})
            .assign(req.body)
            .write();

    res.json(updatedTask);
}