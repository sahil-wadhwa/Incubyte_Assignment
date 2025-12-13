import React from "react";

export default function SweetCard({ name, category, price }) {
return (
<div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
<div>
<h4 className="text-lg font-bold">{name}</h4>
<p className="text-sm text-gray-500">Category: {category}</p>
<p className="mt-2 font-semibold">₹{price}</p>
</div>
<button className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600">
Purchase
</button>
</div>
);
}