import { useEffect, useState } from "react";
import { getSweets, createSweet, deleteSweet } from "../services/sweetApi";

export default function Admin() {
  const [sweets, setSweets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "Dessert",
    price: "",
    quantity: "",
  });

  const loadSweets = async () => {
    const data = await getSweets();
    setSweets(data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSweet(form);
    setForm({ name: "", category: "Dessert", price: "", quantity: "" });
    loadSweets();
  };

  const handleDelete = async (id) => {
    await deleteSweet(id);
    loadSweets();
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>

      {/* Form */}
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
          placeholder="Price"
          type="number"
          className="border p-3 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <input
          placeholder="Quantity"
          type="number"
          className="border p-3 rounded"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />

        <button className="col-span-full bg-red-600 text-white py-3 rounded">
          Add Sweet
        </button>
      </form>

      {/* Table */}
      <div className="space-y-4">
        {sweets.map((sweet) => (
          <div
            key={sweet._id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <h3 className="font-semibold">{sweet.name}</h3>
              <p className="text-sm text-gray-600">
                ₹{sweet.price} | Qty: {sweet.quantity}
              </p>
            </div>
            <button
              onClick={() => handleDelete(sweet._id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
