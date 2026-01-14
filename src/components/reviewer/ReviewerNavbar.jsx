import { NavLink } from "react-router-dom";

const ReviewerNavbar = () => {
  return (
    <div className="bg-indigo-900 px-8 py-2.5 flex justify-center border-b border-indigo-800">
      <NavLink
        to="/reviewer/dashboard"
        className={({ isActive }) =>
          `text-xs font-bold uppercase tracking-widest transition-colors ${
            isActive ? "text-white" : "text-indigo-300 hover:text-white"
          }`
        }
      >
        Reviewer Dashboard
      </NavLink>
    </div>
  );
};

export default ReviewerNavbar;
