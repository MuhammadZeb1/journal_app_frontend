import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { LayoutGrid, FileSearch, AlertCircle, Loader2 } from "lucide-react";
import AdminManuscriptCard from "../../components/admin/AdminManuscriptCard.jsx";
import { fetchAllManuscripts } from "../../features/admin/adminSlice.jsx";

const AdminManuscripts = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector((state) => state.adminManuscripts);

  useEffect(() => {
    dispatch(fetchAllManuscripts());
  }, [dispatch]);

  const handleRead = (manuscript) => {
    toast.info(`Opening ${manuscript.title}...`);
    // Logic to open PDF/File
    window.open(manuscript.fileUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-500">
        <Loader2 className="animate-spin mb-4 text-indigo-600" size={40} />
        <p className="font-medium animate-pulse">Loading Editorial Database...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-rose-50 border border-rose-100 rounded-2xl text-center">
        <AlertCircle className="mx-auto text-rose-500 mb-4" size={48} />
        <h2 className="text-rose-900 font-bold mb-2">Sync Error</h2>
        <p className="text-rose-700 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 bg-[#FDFDFD] min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-slate-900 uppercase tracking-tight">
            Manuscript Management
          </h1>
          <p className="text-slate-500 text-sm italic mt-1">
            Review submissions and coordinate the double-blind peer review process.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
          <FileSearch className="text-indigo-600" size={20} />
          <span className="text-sm font-bold text-slate-700">
            Total Submissions: {manuscripts.length}
          </span>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {manuscripts.map((m, index) => (
          <motion.div
            key={m._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <AdminManuscriptCard
              manuscript={m}
              onRead={handleRead}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminManuscripts;