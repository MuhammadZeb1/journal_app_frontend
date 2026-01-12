import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import UploadManuscript from "./pages/author/UploadManuscript";

import AuthorRequestPage from "./pages/author/AuthorRequestPage.jsx";
// import AdminApprovePage from "./pages/AdminApprovePage.jsx";
import LoginSuccess from "./pages/LoginSuccess.jsx";
import Navbar from "./components/Navbar.jsx";


import AdminApprove from "./components/admin/AdminApprove.jsx";
import AdminPaperApprove from "./pages/admin/AdminApprovePage.jsx";
// import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
// import AutherDashboard from "./pages/author/AuthorDashboard.jsx";

function App() {
  return (
    <>
      
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-expert" element={<AuthorRequestPage />} />
        <Route path="/admin-approve" element={<AdminApprove />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/admin-paper-approve" element={<AdminPaperApprove />} />
        <Route path="/upload-manuscript" element={<UploadManuscript />} />
        </Routes>
      
    </>
  );
}

export default App;
