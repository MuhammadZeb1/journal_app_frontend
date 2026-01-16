import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const adminLinks = [
    { to: "/admin/manuscripts", label: "Manuscripts Management" },
    { to: "/approve-request", label: "Author request" },
  ];

  return (
    // Changed bg to a darker slate for better contrast, or keep 400 and use white text
    <div className="bg-slate-500 px-8 py-2.5 flex justify-end gap-6 shadow-md">
      {adminLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
              // Active: Bright Indigo/White | Inactive: Light Slate/White
              isActive 
                ? "text-white border-b-2 border-white" 
                : "text-slate-200 hover:text-white"
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
