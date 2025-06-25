import { validationResult } from "express-validator";
import { User } from '../models/user.models.js';
import { createProjectService } from "../services/project.service.js";

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