import { NavLink } from "react-router-dom";

const ReviewerNavbar = () => {
  return (
    <div className="bg-gray-50 px-8 py-3 flex justify-end gap-6 border-t">
      
      <NavLink
        to="/reviewer/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-medium"
            : "text-gray-700 hover:text-blue-600"
        }
      >
        Dashboard
      </NavLink>

    </div>
  );
};

export default ReviewerNavbar;
