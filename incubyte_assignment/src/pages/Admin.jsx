import { useEffect, useState } from "react";
import {
  getSweets,
  createSweet,
  restockSweet,
  deleteSweet,
} from "../services/sweetApi";
import { getToken } from "../utils/auth";
import { apiRequest } from "../services/api";

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "Dessert",
    price: "",
    quantity: "",
  });
  const [email, setEmail] = useState("");
  const [restockAmount, setRestockAmount] = useState(1);

  const promoteUser = async () => {
    await apiRequest("/auth/make-admin", {
      method: "POST",
      body: { email },
      token: getToken(),
    });
    alert("User promoted to admin");
  };

  const loadSweets = async () => {
    try {
      setLoading(true);
      const data = await getSweets(getToken());
      setSweets(data);
    } finally {
      setTimeout(() => setLoading(false), 400);
    }
  };

  useEffect(() => {
    loadSweets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSweet(form, getToken());
    setForm({ name: "", category: "Dessert", price: "", quantity: "" });
    loadSweets();
  };

  const handleRestock = async (id) => {
    await restockSweet(id, restockAmount, getToken());
    setRestockAmount(1);
    loadSweets();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this sweet?")) return;
    await deleteSweet(id, getToken());
    loadSweets();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100 pt-28">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-red-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-100/60 rounded-full blur-2xl"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {loading && (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mb-6"></div>
            <p className="text-sm font-medium tracking-wide text-red-600/80 uppercase">
              Maintenance is the Key
            </p>
          </div>
        )}
        {!loading && (
          <>
            <div className="text-center mb-16 relative">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                Admin Dashboard 🛠️
              </h1>
              <p className="text-gray-500 mb-3">
                Manage inventory, stock levels, and user roles
              </p>
              <p className="text-sm font-medium tracking-wide text-red-600/80 uppercase">
                Maintenance is the Key
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-5 mb-16"
            >
              <input
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <select
                className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option>Dessert</option>
                <option>Traditional</option>
                <option>Premium</option>
                <option>Chocolate</option>
                <option>Dry Fruit</option>
                <option>Sugar Free</option>
                <option>Festival Special</option>
                <option>Baked</option>
                <option>Regional Special</option>
              </select>

              <input
                type="number"
                placeholder="Price"
                className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />

              <input
                type="number"
                placeholder="Quantity"
                className="border border-gray-300 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-200"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                required
              />

              <button className="col-span-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition">
                Add Sweet
              </button>
            </form>

            <div className="space-y-6 mb-20">
              {sweets.map((sweet) => (
                <div
                  key={sweet._id}
                  className="flex justify-between items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {sweet.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Stock: <span className="font-medium">{sweet.quantity}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={restockAmount}
                      onChange={(e) => setRestockAmount(Number(e.target.value))}
                      className="w-20 border border-gray-300 rounded-full px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                    <button
                      onClick={() => handleRestock(sweet._id)}
                      className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full font-medium hover:bg-red-200 transition"
                    >
                      Restock
                    </button>
                    <button
                      onClick={() => handleDelete(sweet._id)}
                      className="text-red-600 text-sm font-medium hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 max-w-md mx-auto">
              <h3 className="font-semibold mb-6 text-lg text-gray-800 text-center">
                Promote User to Admin
              </h3>
              <input
                type="email"
                placeholder="User Email"
                className="border border-gray-300 p-3 rounded-full w-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={promoteUser}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-red-600 hover:to-red-700 transition"
              >
                Make Admin
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}