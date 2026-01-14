import { NavLink } from "react-router-dom";

const AuthorNavbar = () => {
  return (
    <div className="bg-indigo-50/50 px-8 py-2.5 flex justify-center gap-8 border-b border-indigo-100">
      {[
        { to: "/upload-manuscript", label: "Upload Manuscript" },
        { to: "/my-manuscripts", label: "My Manuscripts" },
        { to: "/request-expert", label: "Request Expert" },
      ].map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-xs font-bold uppercase tracking-wider transition-colors ${
              isActive ? "text-indigo-700 border-b-2 border-indigo-700" : "text-slate-500 hover:text-indigo-600"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default AuthorNavbar;
