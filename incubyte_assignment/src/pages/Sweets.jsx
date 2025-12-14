import { useEffect, useState } from "react";
import { getSweets } from "../services/sweetApi";
import { getToken } from "../utils/auth";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Sweets() {
  const { addToCart, updateQty, removeFromCart, cart } = useCart();
  const navigate = useNavigate();

  const cartCount = Object.values(cart).reduce(
    (sum, item) => sum + item.qty,
    0
  );
  const [sweets, setSweets] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  const getItemQtyInCart = (id) => {
    return cart[id]?.qty || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Sweets list */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Sweets</h1>

          <div className="bg-white rounded-2xl shadow p-5 mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-full px-4 py-2"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-full px-4 py-2"
            >
              <option value="">All Categories</option>
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
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded-full px-4 py-2"
            />

            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded-full px-4 py-2"
            />
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sweets
              .filter((sweet) =>
                sweet.name.toLowerCase().includes(search.toLowerCase())
              )
              .filter((sweet) =>
                category ? sweet.category === category : true
              )
              .filter((sweet) =>
                minPrice ? sweet.price >= Number(minPrice) : true
              )
              .filter((sweet) =>
                maxPrice ? sweet.price <= Number(maxPrice) : true
              )
              .map((sweet) => (
              <div
                key={sweet._id}
                className="relative border rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{sweet.name}</h3>
                <p className="text-gray-600">{sweet.category}</p>
                <p className="font-bold mt-2">₹{sweet.price}</p>
                <div className="h-px bg-gray-200 my-3" />
                <p className="text-sm mb-4">Available: {sweet.quantity}</p>

                <div className="flex items-center justify-between mt-6">
                  {getItemQtyInCart(sweet._id) === 0 ? (
                    <button
                      disabled={sweet.quantity === 0}
                      onClick={() => addToCart(sweet)}
                      className="bg-red-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-red-700 transition disabled:bg-gray-400"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          const qty = getItemQtyInCart(sweet._id);
                          if (qty === 1) {
                            removeFromCart(sweet._id);
                          } else {
                            updateQty(sweet._id, qty - 1);
                          }
                        }}
                        className="w-9 h-9 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-lg hover:bg-red-200 transition"
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg min-w-[24px] text-center">
                        {getItemQtyInCart(sweet._id)}
                      </span>

                      <button
                        onClick={() =>
                          updateQty(
                            sweet._id,
                            getItemQtyInCart(sweet._id) + 1
                          )
                        }
                        disabled={getItemQtyInCart(sweet._id) >= sweet.quantity}
                        className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full text-lg hover:bg-red-700 transition disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("/cart")}
          className="fixed bottom-6 right-6 bg-red-600 text-white px-7 py-4 rounded-full shadow-xl hover:bg-red-700 transition flex items-center gap-2"
        >
          🛒 Cart ({cartCount})
        </button>
      </div>
    </div>
  );
}