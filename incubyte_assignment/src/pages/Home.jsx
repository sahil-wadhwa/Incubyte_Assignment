import React from "react";
import SweetCard from "../components/SweetCard";

export default function Home() {
const sweets = [
{ id: 1, name: "Gulab Jamun", category: "Dessert", price: 200 },
{ id: 2, name: "Rasgulla", category: "Dessert", price: 180 },
{ id: 3, name: "Kaju Katli", category: "Premium", price: 500 },
{ id: 4, name: "Ladoo", category: "Traditional", price: 150 },
{ id: 5, name: "Barfi", category: "Traditional", price: 220 },
{ id: 6, name: "Mysore Pak", category: "Premium", price: 350 },
];

return (
<>
{/* Hero Section */}
<section className="relative">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/sweet.jpg')", height: "500px", width: "100%" }} />
    <div className="z-100 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur rounded-3xl p-10 shadow-lg">
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
                Taste Happiness,<br /> One Sweet at a Time
            </h2>
            <p className="text-lg text-pink-100 mb-8">
                Explore a wide variety of traditional and premium sweets, freshly
                prepared and managed seamlessly.
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-pink-50">
                    Browse Sweets
                </button>
                <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-pink-600">
                    Admin Login
                </button>
            </div>

        </div>
        </div>
    </div>
</section>

{/* Features Section */}

<section className="relative text-white">
    
    <div className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
            What You Can Do
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Browse Sweets", "Search & Filter", "Purchase Instantly", "Admin Control"].map(
                (feature) => (
                    <div
                        key={feature}
                        className="bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
>
<div className="text-pink-600 text-4xl mb-4">🍬</div>
<h4 className="font-semibold text-lg">{feature}</h4>
</div>
)
)}
</div>
</div>
</section>

{/* Sweets Grid */}
<section className="bg-gray-100">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="flex justify-between items-center mb-10">
<h3 className="text-3xl font-bold">Popular Sweets</h3>
<button className="text-pink-600 font-medium hover:underline">
View All
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{sweets.map((sweet) => (
<SweetCard key={sweet.id} {...sweet} />
))}
</div>
</div>
</section>
</>
);
}
<section className="bg-pink-50 py-20">
<div className="max-w-4xl mx-auto text-center px-6">
<h2 className="text-4xl font-bold mb-4">Your One-Stop Sweet Shop</h2>
<p className="text-gray-600 mb-8">
Discover, manage, and purchase sweets with ease.
</p>
</div>
</section>
