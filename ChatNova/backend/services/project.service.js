import projectModel from '../models/project.model.js';


export const createProjectService = async ({name, userId}) => {
    if(!name || !userId) {
        throw new Error('Name and User ID are required');
    }
    try {
        const project = await projectModel.create({name, users: userId});
        return project;
    } catch (error) {
        throw new Error(error.message);
    }
}