import { Link, useNavigate } from "react-router-dom";
import { getToken, logout, getUserFromToken } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const token = getToken();
  const user = getUserFromToken();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <nav className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-red-100">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-red-600"
        >
          <span className="flex items-center gap-1 bg-red-600 text-white rounded-xl px-2 py-1">
            🍫
            <span className="text-xs">🍩</span>
          </span>
          SweetShop
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {!token && (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium text-red-600 border border-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
              >
                Register
              </Link>
            </>
          )}

          {token && (
            <>
              <Link
                to="/sweets"
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition"
              >
                Sweets
              </Link>

              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  className="text-sm font-medium text-gray-700 hover:text-red-600 transition"
                >
                  Admin
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="ml-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:shadow-lg hover:from-red-600 hover:to-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}