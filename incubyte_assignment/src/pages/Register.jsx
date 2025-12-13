import React from "react";

export default function Register() {
return (
<div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow">
<h2 className="text-2xl font-bold mb-6">Register</h2>
<form className="space-y-4">
<input
type="text"
placeholder="Name"
className="w-full border px-4 py-2 rounded"
/>
<input
type="email"
placeholder="Email"
className="w-full border px-4 py-2 rounded"
/>
<input
type="password"
placeholder="Password"
className="w-full border px-4 py-2 rounded"
/>
<button className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
Register
</button>
</form>
</div>
);
}