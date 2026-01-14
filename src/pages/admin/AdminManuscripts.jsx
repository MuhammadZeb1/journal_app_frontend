import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { LayoutGrid, FileSearch, AlertCircle, Loader2 } from "lucide-react";
import AdminManuscriptCard from "../../components/admin/AdminManuscriptCard.jsx";
import { fetchAllManuscripts } from "../../features/admin/adminSlice.jsx";
import API from "../../api/authApi.js"; // Import your API instance

const AdminManuscripts = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector((state) => state.adminManuscripts);

  useEffect(() => {
    dispatch(fetchAllManuscripts());
  }, [dispatch]);

  const handleRead = async (manuscript) => {
    const toastId = toast.loading(`Preparing ${manuscript.title}...`);
    try {
      // 1. Fetch file as binary data (Blob)
      const response = await API.get(`/admin/manuscripts/${manuscript._id}/file`, {
        responseType: 'blob',
      });

      // 2. Create a temporary local URL for the file
      const blob = new Blob([response.data], { type: manuscript.contentType || 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // 3. Open in new tab
      window.open(url, "_blank");

      toast.update(toastId, { render: "File opened!", type: "success", isLoading: false, autoClose: 2000 });
      
      // Cleanup the URL object later to save memory
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
    } catch (err) {
      toast.update(toastId, { render: "Failed to load file", type: "error", isLoading: false, autoClose: 3000 });
    }
  };

  // ... (Keep your existing Loading and Error UI)

  return (
    <div className="p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      {/* ... Header UI ... */}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {manuscripts.map((m, index) => (
          <motion.div key={m._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <AdminManuscriptCard manuscript={m} onRead={handleRead} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminManuscripts;