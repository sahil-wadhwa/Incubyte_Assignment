import React from "react";
import SweetCard from "../components/SweetCard";

export default function Home() {
const sweets = [
{ id: 1, name: "Gulab Jamun", category: "Dessert", price: 200 },
{ id: 2, name: "Rasgulla", category: "Dessert", price: 180 },
{ id: 3, name: "Kaju Katli", category: "Premium", price: 500 },
];

return (
<>
{/* Hero Section */}
<section className="bg-pink-50 py-20">
<div className="max-w-4xl mx-auto text-center px-6">
<h2 className="text-4xl font-bold mb-4">Your One-Stop Sweet Shop</h2>
<p className="text-gray-600 mb-8">
Discover, manage, and purchase sweets with ease.
</p>
</div>
</section>

{/* Sweets Grid */}
<section className="max-w-7xl mx-auto px-6 py-16">
<h3 className="text-2xl font-semibold mb-8">Available Sweets</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{sweets.map((sweet) => (
<SweetCard key={sweet.id} {...sweet} />
))}
</div>
</section>
</>
);
}
