import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AuthorNavbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/upload-manuscript", label: "Upload Manuscript" },
    { to: "/my-manuscripts", label: "My Manuscripts" },
    { to: "/request-expert", label: "Request Expert" },
  ];

  const linkClass = ({ isActive }) =>
    `block text-xs font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? "text-indigo-700 border-b-2 border-indigo-700"
        : "text-slate-500 hover:text-indigo-600"
    }`;

  return (
    <div className="bg-indigo-50/50 border-b border-indigo-100 px-6 py-2.5">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-end md:justify-end">
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-3 space-y-3"
          >
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthorNavbar;
