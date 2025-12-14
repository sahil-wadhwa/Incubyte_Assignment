import { useEffect, useState } from "react";
import { getSweets } from "../services/sweetApi";
import { getToken } from "../utils/auth";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Sweets() {
  const { addToCart, updateQty, removeFromCart, cart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const token = getToken();

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
      setLoading(true);
      const data = await getSweets(token);
      setSweets(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => setLoading(false), 400);
    }
  };

  useEffect(() => {
    if (token) {
      loadSweets();
    } else {
      setLoading(false);
    }
  }, [token]);

  const getItemQtyInCart = (id) => {
    return cart[id]?.qty || 0;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100 pt-28">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-red-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-100/60 rounded-full blur-2xl"></div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Sweets list */}
        <div>
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              Explore Our Sweets 🍫
            </h1>
            <p className="text-gray-500">
              Handcrafted delights for every craving
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 mb-14 grid grid-cols-1 md:grid-cols-4 gap-4">
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

          {loading ? (
            <div className="flex items-center justify-center h-[60vh]">
              <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
            </div>
          ) : !token ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="text-6xl mb-6">🔐</div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
                Login Required
              </h2>
              <p className="text-gray-500 max-w-md mb-8">
                Please login or create an account to explore and purchase our delicious sweets.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-red-700 transition"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition"
                >
                  Register
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
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
          )}
        </div>

        {token && (
          <button
            onClick={() => navigate("/cart")}
            className="fixed bottom-6 right-6 bg-red-600/90 backdrop-blur text-white px-7 py-4 rounded-full shadow-2xl hover:bg-red-700 transition flex items-center gap-2"
          >
            🛒 Cart ({cartCount})
          </button>
        )}
      </div>
    </div>
  );
}