const express = require('express');
const { verifyToken } = require('../Controllers/middlewares/auth.middleware');
const { allowRoles } = require('../Controllers/middlewares/role.middleware');
const { Project } = require('../Models/Project'); // Adjust the path as necessary

const projectRouter = express.Router();
projectRouter.use(express.json());  

//Route to create a new project
projectRouter.post('/create', verifyToken, allowRoles('Admin', 'Manager'), async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await Project.create({
            name,
            description,
            created_by: req.user.id
        });
        res.status(201).json({ message: 'Project created successfully', project });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});