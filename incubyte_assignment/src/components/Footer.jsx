import React from "react";

export default function Footer() {
return (
  <footer className="relative bg-gradient-to-br from-red-50 via-white to-red-100 border-t border-red-100 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute -top-16 -left-16 w-72 h-72 bg-red-200/40 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-300/30 rounded-full blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Brand */}
        <div className="flex items-center gap-2 text-xl font-extrabold text-red-600">
          <span className="bg-red-600 text-white rounded-xl px-2 py-1">
            🍫
          </span>
          SweetShop
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-600 max-w-md">
          Handcrafted sweets, thoughtful maintenance, and delightful experiences.
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-red-200 my-2"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2025 Sweet Shop Management System. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
}
