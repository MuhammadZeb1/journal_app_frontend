import AdminNavbar from "./admin/AdminNavbar";
import AuthorNavbar from "./author/AuthorNavbar";
import ReviewerNavbar from "./reviewer/ReviewerNavbar";
import PublicNavbar from "./PublicNavbar";


const Navbar = () => {
  const role = localStorage.getItem("role");

  return (
    <>
      <PublicNavbar />

      <div className="border-t">
        {role === "admin" && <AdminNavbar />}
        {role === "author" && <AuthorNavbar />}
        {role === "reviewer" && <ReviewerNavbar />}
      </div>
    </>
  );
};

export default Navbar;
