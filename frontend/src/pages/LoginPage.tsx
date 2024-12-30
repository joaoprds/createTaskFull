import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook
import "react-toastify/dist/ReactToastify.css";

const LoginPage: React.FC <{ onLogin: () => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initializing useNavigate hook

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/login", {
                username,
                password,
            });

            // Save the token to localStorage
            localStorage.setItem("token", response.data.token);
            console.log("Token saved in localStorage:", localStorage.getItem("token"));



            // Show success toast
            toast.success("Login with Success!");

            // Redirect to the TaskPage
            onLogin();
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                toast.error("Wrong Credentials!");
            } else {
                toast.error("Erro ao realizar login.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">User</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="input your Username"
                            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="input your Password"
                            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Enter"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
