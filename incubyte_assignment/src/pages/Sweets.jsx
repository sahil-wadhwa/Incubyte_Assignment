import React, { useState } from "react";
import SweetCard from "../components/SweetCard";

const SWEETS_DATA = [
  { id: 1, name: "Gulab Jamun", category: "Dessert", price: 200 },
  { id: 2, name: "Rasgulla", category: "Dessert", price: 180 },
  { id: 3, name: "Kaju Katli", category: "Premium", price: 500 },
  { id: 4, name: "Ladoo", category: "Traditional", price: 150 },
  { id: 5, name: "Barfi", category: "Traditional", price: 220 },
  { id: 6, name: "Mysore Pak", category: "Premium", price: 350 },
];

export default function Sweets() {
  const [search, setSearch] = useState("");

  const filteredSweets = SWEETS_DATA.filter((sweet) =>
    sweet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">All Sweets</h1>

      {/* Search Bar */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search sweets by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Grid */}
      {filteredSweets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSweets.map((sweet) => (
            <SweetCard key={sweet.id} {...sweet} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No sweets found.</p>
      )}
    </div>
  );
}
