import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/users/register", { email, password })
            .then((response) => {
                console.log(response.data);
                navigate("/"); // Redirect to home page on successful registration
            })
            .catch((error) => {
                // Handle registration error
                console.error("Registration failed:", error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-10 border border-gray-700">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 ease-in-out"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-gray-400 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};