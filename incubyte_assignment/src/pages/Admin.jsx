import { useEffect, useState } from "react";
import {
  getSweets,
  createSweet,
  restockSweet,
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
    await restockSweet(id, 10, getToken());
    loadSweets();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
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

        <button className="col-span-full bg-red-600 text-white py-3 rounded">
          Add Sweet
        </button>
      </form>

      <div className="space-y-4">
        {sweets.map((sweet) => (
          <div
            key={sweet._id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <h3 className="font-semibold">{sweet.name}</h3>
              <p className="text-sm">Qty: {sweet.quantity}</p>
            </div>
            <button
              onClick={() => handleRestock(sweet._id)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Restock +10
            </button>
          </div>
        ))}
      </div>
      <div className="border p-4 rounded mb-8">
  <h3 className="font-semibold mb-2">Promote User to Admin</h3>
  <input
    type="email"
    placeholder="User Email"
    className="border p-2 rounded w-full mb-2"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <button
    onClick={promoteUser}
    className="bg-red-600 text-white px-4 py-2 rounded"
  >
    Make Admin
  </button>
</div>
    </div>
  );
}