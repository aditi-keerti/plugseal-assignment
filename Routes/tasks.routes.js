const express = require('express');
const allowRoles = require('../Controllers/middlewares/role.middleware').allowRoles; // Adjust the path as necessary
const verifyToken = require('../Controllers/middlewares/auth.middleware').verifyToken; // Adjust the path as necessary
const taskRouter = express.Router();
const { Task } = require('../Models/Task'); // Adjust the path as necessary
const { Project } = require('../Models');


taskRouter.use(express.json());
// Route to create a new task
taskRouter.post('/create',verifyToken,allowRoles('Admin', 'Manager'), async (req, res) => {
    try {
        const {title,project_id,assigned_to,status,due_date,priority } = req.body;
        const project = await Project.findByPk(project_id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        if (project.created_by !== req.user.id && !['Admin', 'Manager'].includes(req.user.role)) {
            return res.status(403).json({ message: 'You do not have permission to create tasks for this project' });
        }
        const task = await Task.create({ title,project_id,assigned_to,status,due_date,priority , created_by: req.user.id });
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});