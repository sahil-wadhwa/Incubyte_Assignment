import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "opacity-0 -translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <Navbar variant="static" />
      </div>
      {scrolled && (
        <div className="animate-fade-in">
          <Navbar variant="floating" />
        </div>
      )}
      {/* Hero Section */}
      <section className="relative bg-white pt-24">
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

{/* Cool Offers Section */}
<section className="relative bg-gradient-to-br from-red-50 via-white to-red-100 py-24 overflow-hidden">
  {/* Decorative blobs */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-200/40 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-24 w-96 h-96 bg-red-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-extrabold mb-4">
        Sweet Deals You’ll Love 🍫
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Grab exclusive offers and festive discounts on your favorite sweets.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Offer Card */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-5xl mb-6">🔥</div>
        <h4 className="text-2xl font-bold mb-2">Festival Bonanza</h4>
        <p className="text-gray-600 mb-6">
          Flat <span className="font-semibold text-red-600">20% OFF</span> on all
          traditional sweets this festive season.
        </p>
        <button className="text-red-600 font-semibold hover:underline">
          Explore Offers →
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-5xl mb-6">🎁</div>
        <h4 className="text-2xl font-bold mb-2">Combo Packs</h4>
        <p className="text-gray-600 mb-6">
          Buy curated sweet boxes and save more on bulk purchases.
        </p>
        <button className="text-red-600 font-semibold hover:underline">
          View Combos →
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-5xl mb-6">⚡</div>
        <h4 className="text-2xl font-bold mb-2">Limited Time Flash Sale</h4>
        <p className="text-gray-600 mb-6">
          Special discounts available for a short time only. Don’t miss out!
        </p>
        <button className="text-red-600 font-semibold hover:underline">
          Shop Now →
        </button>
      </div>
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
