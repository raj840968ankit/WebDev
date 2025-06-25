import { Router } from "express";
import { body } from "express-validator";
import * as projectController from '../controllers/project.controller.js';
import { authUser } from "../middleware/auth.middleware.js";

const router = Router();

router.post('/create', authUser, [
    body('name').isString().withMessage('Name is required'),
], projectController.createProjectController)

export const projectRouter = router;