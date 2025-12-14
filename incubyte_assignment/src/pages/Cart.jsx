import { useCart } from "../context/CartContext";
import { purchaseSweet } from "../services/sweetApi";
import { getToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const items = Object.values(cart);

  const checkout = async () => {
    for (const item of items) {
      for (let i = 0; i < item.qty; i++) {
        await purchaseSweet(item._id, getToken());
      }
    }
    alert("Order placed successfully");
    clearCart();
    navigate("/sweets");
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 && (
        <p className="text-gray-500">Your cart is empty</p>
      )}

      {items.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) =>
                updateQty(item._id, Number(e.target.value))
              }
              className="w-16 border rounded p-1"
            />
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <div className="text-right font-bold mt-6">
            Total: ₹{total}
          </div>
          <button
            onClick={checkout}
            className="w-full mt-6 bg-red-600 text-white py-3 rounded"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}