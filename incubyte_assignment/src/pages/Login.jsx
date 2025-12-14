import { useState } from "react";
import { loginUser } from "../services/authApi";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ email, password });
      setToken(res.token);
      navigate("/sweets");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700">
          Login
        </button>
      </form>
    </div>
  );
}