import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
return (
<header className="bg-white shadow">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<Link to="/" className="text-2xl font-bold text-red-600">
ByteSweet
</Link>

<nav className="space-x-4">
<Link to="/sweets" className="text-sm font-medium hover:text-red-600">
  Explore Sweets
</Link>
<Link to="/login" className="text-sm font-medium hover:text-red-600">
Login
</Link>
<Link to="/register" className="text-sm font-medium hover:text-red-600">
Register
</Link>
<Link to="/admin" className="text-sm font-medium hover:text-red-600">
  Admin
</Link>
</nav>
</div>
</header>
);
}
