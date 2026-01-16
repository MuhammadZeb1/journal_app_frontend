import { NavLink } from "react-router-dom";

const ReviewerNavbar = () => {
  return (
    <div className="bg-slate-400 px-8 py-2.5 flex justify-end border-b">
      <NavLink
        to="/reviewer/dashboard"
        className={({ isActive }) =>
          `text-xs font-bold uppercase tracking-widest transition-colors ${
            isActive ? "text-white" : "text-indigo-300 hover:text-white"
          }`
        }
      >
        {/* Changed from 'Reviewer Dashboard' to something more descriptive */}
        Expert Review Panel
      </NavLink>
    </div>
  );
};

export default ReviewerNavbar;