import { useEffect, useState } from "react";
import { getSweets, searchSweets, purchaseSweet } from "../services/sweetApi";
import { getToken } from "../utils/auth";

export default function Sweets() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const loadSweets = async () => {
    try {
      const data = await getSweets(getToken());
      setSweets(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadSweets();
  }, []);

  const handleSearch = async () => {
    const data = await searchSweets(`name=${search}`, getToken());
    setSweets(data);
  };

  const handlePurchase = async (id) => {
    await purchaseSweet(id, getToken());
    loadSweets();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Sweets</h1>

      <div className="flex gap-4 mb-8">
        <input
          placeholder="Search sweets"
          className="border p-3 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white px-6 rounded"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sweets.map((sweet) => (
          <div
            key={sweet._id}
            className="border rounded-xl p-6 bg-white shadow"
          >
            <h3 className="text-xl font-semibold">{sweet.name}</h3>
            <p className="text-gray-600">{sweet.category}</p>
            <p className="font-bold mt-2">₹{sweet.price}</p>
            <p className="text-sm mb-4">Qty: {sweet.quantity}</p>

            <button
              disabled={sweet.quantity === 0}
              onClick={() => handlePurchase(sweet._id)}
              className="w-full bg-red-600 text-white py-2 rounded disabled:bg-gray-400"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}