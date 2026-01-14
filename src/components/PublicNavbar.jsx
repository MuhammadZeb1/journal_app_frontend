import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PublicNavbar = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center">

      {/* LEFT → LOGO */}
      <div className="w-1/4">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-blue-600"
        >
          JournalSys
        </Link>
      </div>

      {/* CENTER → PUBLIC (ANYONE) */}
      <div className="w-2/4 flex justify-center">
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="font-medium text-gray-700 hover:text-blue-600 transition">
            Information ▾
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 left-1/2 -translate-x-1/2
                           bg-white shadow-lg rounded-lg w-64 z-50"
              >
                

                <NavLink
                  to="/about"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/editorial-team"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  Editorial Team
                </NavLink>

                <NavLink
                  to="/editorial-policies"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  Editorial Policies
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT → AUTH BUTTONS */}
      <div className="w-1/4 flex justify-end gap-3">
        {!token ? (
          <>
          <NavLink
                  to="/"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  Home
                </NavLink>
            <NavLink
              to="/login"
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </NavLink>
          </>
        ) : (
            
          <>
          <NavLink
                  to="/"
                  className="block px-5 py-2 hover:bg-gray-100"
                >
                  Home
                </NavLink>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
          </>
        )}
      </div>

    </nav>
  );
};

export default PublicNavbar;
