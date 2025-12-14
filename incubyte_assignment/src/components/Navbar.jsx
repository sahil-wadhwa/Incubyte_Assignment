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
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/sweets" className="text-xl font-bold text-red-600">
        SweetShop
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {!token && (
          <>
            <Link
              to="/login"
              className="text-sm font-medium hover:text-red-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium hover:text-red-600"
            >
              Register
            </Link>
          </>
        )}

        {token && (
          <>
            <Link
              to="/sweets"
              className="text-sm font-medium hover:text-red-600"
            >
              Sweets
            </Link>

            {user?.role === "admin" && (
              <Link
                to="/admin"
                className="text-sm font-medium hover:text-red-600"
              >
                Admin
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}