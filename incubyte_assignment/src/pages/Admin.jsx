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
    const data = await getSweets(getToken());
    setSweets(data);
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-10 text-red-700">
          Admin Dashboard
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4 mb-14"
        >
          <input
            placeholder="Name"
            className="border p-3 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <select
            className="border p-3 rounded"
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
            className="border p-3 rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />

          <input
            type="number"
            placeholder="Quantity"
            className="border p-3 rounded"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            required
          />

          <button className="col-span-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Add Sweet
          </button>
        </form>

        <div className="space-y-5 mb-14">
          {sweets.map((sweet) => (
            <div
              key={sweet._id}
              className="flex justify-between items-center bg-white rounded-xl shadow p-5 hover:shadow-md transition"
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
                  className="w-20 border border-gray-300 rounded-full px-3 py-1 text-center"
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
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold mb-4 text-lg text-gray-800">
            Promote User to Admin
          </h3>
          <input
            type="email"
            placeholder="User Email"
            className="border p-2 rounded w-full mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={promoteUser}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Make Admin
          </button>
        </div>
      </div>
    </div>
  );
}