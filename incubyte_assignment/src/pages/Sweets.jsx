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
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sweets list */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Sweets</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sweets.map((sweet) => (
            <div
              key={sweet._id}
              className="border rounded-xl p-6 bg-white shadow"
            >
              <h3 className="text-xl font-semibold">{sweet.name}</h3>
              <p className="text-gray-600">{sweet.category}</p>
              <p className="font-bold mt-2">₹{sweet.price}</p>
              <p className="text-sm mb-4">Available: {sweet.quantity}</p>

              <div className="flex items-center justify-between mt-4">
                {getItemQtyInCart(sweet._id) === 0 ? (
                  <button
                    disabled={sweet.quantity === 0}
                    onClick={() => addToCart(sweet)}
                    className="bg-red-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
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
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded text-lg"
                    >
                      -
                    </button>

                    <span className="font-semibold min-w-[20px] text-center">
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
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded text-lg disabled:opacity-40"
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
        className="fixed bottom-6 right-6 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700"
      >
        Cart ({cartCount})
      </button>
    </div>
  );
}