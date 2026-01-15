import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut, User, BookOpen } from "lucide-react";
import imagLogo from "../assets/Logo_psychological Journal_with text (1).png";

const PublicNavbar = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="w-full bg-white border-b border-slate-100 px-8 py-5 flex items-center sticky top-0 z-[100]">
      {/* LEFT → LOGO */}
      <div className="w-1/4">
        <Link to="/" className="flex items-center gap-2 group">
          
          <span className="text-xl font-serif font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors uppercase">
            <img src={imagLogo} alt=""
            className="h-12 w-auto"
            />
          </span>
        </Link>
      </div>

      {/* CENTER → NAVIGATION */}
      <div className="w-2/4 flex justify-center items-center gap-4">
        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
        
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            About The Journal <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl rounded-xl border border-slate-100 py-2 mt-1 overflow-hidden"
              >
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/editorial-team", label: "Editorial Team" },
                  { to: "/editorial-policies", label: "Editorial Policies" },
                  { to: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT → AUTH */}
      <div className="w-1/4 flex justify-end gap-3 items-center">
        {!token ? (
          <>
            <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors px-4">
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-rose-600 text-sm font-bold rounded-full hover:bg-rose-100 transition-all active:scale-95"
          >
            <LogOut size={16} /> Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default PublicNavbar;