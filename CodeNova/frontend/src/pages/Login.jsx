import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios.js";
import { UserContext } from "../context/user.context.jsx"; // Import the UserContext

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext); // Access setUser from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post( "/users/login",{ email, password, });
            console.log("✅ Login Success:", response.data);

            setUser(response.data.user); // Set user in context

            //localStorage.setItem("token", response.data.token); // Store token in localStorage

            navigate("/"); // Redirect to home page on successful login
        } catch (error) {
            if(error.response.data.errors){
                alert(error.response.data.errors)
            }
            console.error("❌ Login failed:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-10 border border-gray-700">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    Sign In
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2" htmlFor="email">
                            Email
                        </label>
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
                        <label className="block text-gray-300 mb-2" htmlFor="password">
                            Password
                        </label>
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
                        Login
                    </button>
                </form>
                <p className="mt-6 text-gray-400 text-center">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};
