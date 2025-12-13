import React, { useState } from "react";

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Sweet:", formData);
    alert("Sweet submitted (API integration later)");
    setFormData({
      name: "",
      category: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Add Sweet Form */}
      <div className="bg-white shadow rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6">Add New Sweet</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Sweet Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            >
              <option value="">Select category</option>
              <option>Dessert</option>
              <option>Traditional</option>
              <option>Premium</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              Add Sweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
