import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authApi";

export default function Register() {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
    
        try {
          const res = await registerUser({ name, email, password });
          navigate("/login");
        } catch (err) {
          setError(err.message);
        }
    };
return (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100 pt-28">
    {/* Decorative background elements */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200/40 rounded-full blur-3xl"></div>
    <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-red-300/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-100/60 rounded-full blur-2xl"></div>
    <form
      onSubmit={handleSubmit}
      className="relative bg-white/90 backdrop-blur rounded-3xl shadow-2xl w-full max-w-md p-10"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-1">
          Create Account 🍫
        </h2>
        <p className="text-sm text-gray-500">
          Join us and explore delightful sweets
        </p>
      </div>

      {error && (
        <p className="text-red-600 text-sm mb-4 text-center">
          {error}
        </p>
      )}

      <input
        type="name"
        placeholder="Name"
        className="w-full border border-gray-300 p-3 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-200"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 p-3 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-200"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 p-3 rounded-full mb-6 focus:outline-none focus:ring-2 focus:ring-red-200"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition">
        Register
      </button>
    </form>
  </div>
);
}