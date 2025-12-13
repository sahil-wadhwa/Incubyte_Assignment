import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sweets from "./pages/Sweets";
import Admin from "./pages/Admin";
import "./index.css"

export default function App() {
return (
<Router>
  <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
    <Navbar />

    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sweets" element={<Sweets />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>

    <Footer />
  </div>
</Router>
);
}
