import React from "react";
import SweetCard from "../components/SweetCard";
import { Link } from "react-router-dom";

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
<section className="relative bg-white">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/sweet.jpg')", height: "500px", width: "100%" }} />
    <div className="z-100 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur rounded-3xl p-10 shadow-lg">
            <h2 className="text-5xl font-extrabold leading-tight mb-6 text-white">
                Taste Happiness,<br /> One Sweet at a Time
            </h2>
            <p className="text-lg text-red-100 mb-8">
                Explore a wide variety of traditional and premium sweets, freshly
                prepared and managed seamlessly.
            </p>
            <div className="flex gap-4">
                <Link to="/sweets" >
                    <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-red-50">
                        Browse Sweets
                    </button>
                </Link>
                
                <button className="border border-white px-6 font-semibold text-white bg-black py-3 rounded-xl hover:bg-white hover:text-red-600">
                    Admin Login
                </button>
            </div>

        </div>
        </div>
    </div>
</section>


{/* Features Section */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-extrabold mb-4">
        Built for Speed & Simplicity
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Everything you need to manage sweets efficiently — designed for both
        customers and admins.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Feature Card */}
      <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-red-50 transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-100 text-red-600 text-2xl mb-6 group-hover:scale-110 transition">
          🍬
        </div>
        <h4 className="text-xl font-semibold mb-2">Browse Sweets</h4>
        <p className="text-gray-600 text-sm">
          Explore a wide variety of traditional and premium sweets with ease.
        </p>
      </div>

      <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-red-50 transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-100 text-red-600 text-2xl mb-6 group-hover:scale-110 transition">
          🔍
        </div>
        <h4 className="text-xl font-semibold mb-2">Smart Search</h4>
        <p className="text-gray-600 text-sm">
          Quickly find sweets by name and category using instant search.
        </p>
      </div>

      <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-red-50 transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-100 text-red-600 text-2xl mb-6 group-hover:scale-110 transition">
          🛒
        </div>
        <h4 className="text-xl font-semibold mb-2">Instant Purchase</h4>
        <p className="text-gray-600 text-sm">
          Buy sweets instantly with real-time stock availability.
        </p>
      </div>

      <div className="group bg-gray-50 rounded-3xl p-8 hover:bg-red-50 transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-100 text-red-600 text-2xl mb-6 group-hover:scale-110 transition">
          🛠️
        </div>
        <h4 className="text-xl font-semibold mb-2">Admin Control</h4>
        <p className="text-gray-600 text-sm">
          Add, update, and manage sweets effortlessly from the dashboard.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Sweets Grid */}
<section className="bg-gray-100">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="flex justify-between items-center mb-10">
<h3 className="text-3xl font-bold">Popular Sweets</h3>
<button className="text-red-600 font-medium hover:underline">
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
<section className="bg-red-50 py-20">
<div className="max-w-4xl mx-auto text-center px-6">
<h2 className="text-4xl font-bold mb-4">Your One-Stop Sweet Shop</h2>
<p className="text-gray-600 mb-8">
Discover, manage, and purchase sweets with ease.
</p>
</div>
</section>
