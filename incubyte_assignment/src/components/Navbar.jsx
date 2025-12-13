import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
return (
<header className="bg-white shadow">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<Link to="/" className="text-2xl font-bold text-pink-600">
AI KATA Sweet Shop
</Link>
<nav className="space-x-4">
<Link to="/login" className="text-sm font-medium hover:text-pink-600">
Login
</Link>
<Link to="/register" className="text-sm font-medium hover:text-pink-600">
Register
</Link>
</nav>
</div>
</header>
);
}
