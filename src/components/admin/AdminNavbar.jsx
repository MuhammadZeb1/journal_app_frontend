import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="bg-gray-50 px-8 py-3 flex gap-6 justify-end">
      <NavLink className="hover:text-blue-600" to="/admin/manuscripts">
        Manuscripts
      </NavLink>
      <NavLink className="hover:text-blue-600" to="/admin-paper-approve">
        Approvals
      </NavLink>
      <NavLink className="hover:text-blue-600" to="/admin-approve">
        Authors
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
