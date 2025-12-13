import React from "react";

export default function SweetCard({ name, category, price, inStock = true }) {
return (
<div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
{/* Image Placeholder */}
<div className="h-40 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
<span className="text-6xl">🍰</span>
</div>

{/* Content */}
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-lg font-semibold group-hover:text-red-600 transition">
{name}
</h4>
<span className={`text-xs px-2 py-1 rounded-full ${inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
{inStock ? "In Stock" : "Out of Stock"}
</span>
</div>

<p className="text-sm text-gray-500 mb-4">Category: {category}</p>

<div className="flex justify-between items-center">
<p className="text-xl font-bold text-gray-800">₹{price}</p>
<button
disabled={!inStock}
className={`px-4 py-2 rounded-xl text-sm font-medium transition ${inStock ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
>
Buy Now
</button>
</div>
</div>
</div>
);
}