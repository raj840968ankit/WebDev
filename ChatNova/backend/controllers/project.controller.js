import { validationResult } from "express-validator";
import { User } from '../models/user.models.js';
import { createProjectService, getAllProjectByUserId } from "../services/project.service.js";

export const createProjectController = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(),});
        }
        const { name } = req.body;
        const loggedInUser = await User.findOne({ email: req.user.email });

        const userId = loggedInUser._id;

        const newProject = await createProjectService({ name, userId });

        return res.status(201).json(newProject);
    } catch (error) {
        console.error("Error creating project:", error);
        return res.status(500).json({ error: error.message });
    }
}

export const getAllProjectsController = async (req, res) => {
    try {
        const loggedInUser = await User.findOne({ email: req.user.email });
        if (!loggedInUser) {
            return res.status(404).json({ error: "User not found" });
        }
        
        const projects = await getAllProjectByUserId(loggedInUser._id);

        return res.status(200).json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return res.status(500).json({ error: error.message });
    }
}

export const addUserToProjectController = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { projectId, users } = req.body;
        const loggedInUser = await User.findOne({ email: req.user.email });

        if (!loggedInUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Assuming you have a service function to add users to a project
        const updatedProject = await addUsersToProject({ projectId, users, userId: loggedInUser._id });

        return res.status(200).json(updatedProject);
    } catch (error) {
        console.error("Error adding users to project:", error);
        return res.status(500).json({ error: error.message });
    }
}