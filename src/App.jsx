import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import RoleManagement from "./pages/RoleManagement.jsx";
import AuthorRequestPage from "./pages/AuthorRequestPage.jsx";
// import AdminApprovePage from "./pages/AdminApprovePage.jsx";
import LoginSuccess from "./pages/LoginSuccess.jsx";
import Navbar from "./components/Navbar.jsx";
import UploadPaper from "./pages/UploadPaper.jsx";
import ManuscriptDashboard from "./pages/ManuscriptDashboard.jsx";
import AdminApprove from "./components/AdminApprove.jsx";
import ManuscriptPortal from "./pages/ManuscriptPortal.jsx";
import AdminPaperApprove from "./pages/AdminPaperApprove.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AutherDashboard from "./pages/author/AuthorDashboard.jsx";
import ReviewerDashboard from "./pages/reviewer/ReviewerDashboard.jsx";
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
        <Route path="/upload-paper" element={<UploadPaper />} />
        <Route path="/dashboardPaper" element={<ManuscriptDashboard />} />
        <Route path="/dashboard-paper" element={<ManuscriptPortal />} />
        <Route path="/admin-paper-approve" element={<AdminPaperApprove />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/auther-dashboard" element={<AutherDashboard />} />
        <Route path="/reviewer-dashboard" element={<ReviewerDashboard />} />

        
        </Routes>
      
    </>
  );
}

export default App;
