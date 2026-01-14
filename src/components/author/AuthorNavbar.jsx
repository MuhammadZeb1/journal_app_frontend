import { NavLink } from "react-router-dom";

const AuthorNavbar = () => {
  return (
    <div className="bg-gray-50 px-8 py-3 flex justify-end gap-6 border-t">
      
      <NavLink
        to="/upload-manuscript"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-medium"
            : "text-gray-700 hover:text-blue-600"
        }
      >
        Upload Manuscript
      </NavLink>

      <NavLink
        to="/my-manuscripts"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-medium"
            : "text-gray-700 hover:text-blue-600"
        }
      >
        My Manuscripts
      </NavLink>

      <NavLink
        to="/request-expert"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-medium"
            : "text-gray-700 hover:text-blue-600"
        }
      >
        Request Expert
      </NavLink>

    </div>
  );
};

export default AuthorNavbar;
