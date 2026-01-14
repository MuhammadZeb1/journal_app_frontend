import { useEffect, useState } from "react";
import AdminNavbar from "./admin/AdminNavbar";
import AuthorNavbar from "./author/AuthorNavbar";
import ReviewerNavbar from "./reviewer/ReviewerNavbar";
import PublicNavbar from "./PublicNavbar";
import jwt_decode from "jwt-decode"; // ✅ default import

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decoded = jwt_decode(storedToken); // ✅ works now
        setRole(decoded.role); // extract role from token
        setToken(storedToken);
      } catch (err) {
        console.error("Invalid token", err);
        setRole(null);
        setToken(null);
        localStorage.removeItem("token");
      }
    }
  }, []);

  console.log(role, "role");

  return (
    <>
      <PublicNavbar />

      <div className="border-t">
        {role === "admin" && <AdminNavbar />}
        {role === "author" && <AuthorNavbar />}
        {role === "expert" && <ReviewerNavbar />}
      </div>
    </>
  );
};

export default Navbar;
