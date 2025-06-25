import { useContext } from 'react';
import {UserContext} from '../context/user.context.jsx'; // Import the UserContext
import { useState } from 'react';
import axios from '../config/axios.js'; // Import axios instance

export const Home = () => {
  const { user } = useContext(UserContext); // Access user from context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  
  const createProjectHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/projects/create', {
        name: projectName,
      });
      console.log(response.data); // Log the created project data
      setProjectName(''); // Clear the input field
      setIsModalOpen(false); // Close the modal
      // Optionally, you can refresh the project list or update the UI to show the new project
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="p-4">
      <div className="projects">
        <button onClick={() => setIsModalOpen(true)} className="project p-3 border border-slate-300 rounded-md">
          <i className="ri-file-add-line text-2xl"></i> New Project
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
            <form
              onSubmit={createProjectHandler} // Function to handle project creation
            >
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project name"
                required
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}