import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  // Updated admin links
  const adminLinks = [
    { to: "/admin/manuscripts", label: "Manuscripts Management" },
    { to: "/approve-request", label: "Author request" },
  ];

  return (
    <div className="bg-slate-900 px-8 py-2.5 flex justify-center gap-8 shadow-inner">
      {adminLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
              isActive ? "text-indigo-400" : "text-slate-400 hover:text-white"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default AdminNavbar;
