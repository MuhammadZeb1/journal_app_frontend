import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { 
  UserPlus, 
  ChevronLeft, 
  BookOpen, 
  UserCheck, 
  Search, 
  Loader2,
  Mail
} from "lucide-react";
import API from "../../api/authApi.js";

const AssignReviewerPage = () => {
  const { manuscriptId } = useParams();
  const navigate = useNavigate();

  const [manuscript, setManuscript] = useState(null);
  const [experts, setExperts] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. Fetch data in parallel
        const [mRes, eRes] = await Promise.all([
          API.get(`/admin/manuscripts`),
          API.get("/admin/experts")
        ]);

        const m = mRes.data.find((m) => m._id === manuscriptId);
        if (!m) {
          toast.error("Manuscript not found");
          navigate(-1);
        }
        setManuscript(m);
        setExperts(eRes.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load assignment data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [manuscriptId, navigate]);

  const handleAssign = async () => {
    if (!selectedExpert) {
      toast.warn("Please select an expert from the list");
      return;
    }

    try {
      setSubmitting(true);
      await API.post("/admin/manuscripts/assign-reviewer", {
        manuscriptId,
        reviewerId: selectedExpert,
      });
      toast.success("Reviewer assigned successfully!");
      navigate(-1);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to assign reviewer");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-slate-500 bg-[#FDFDFD]">
        <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
        <p className="font-serif italic">Preparing Editorial Data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* Back Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors mb-8 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Manuscripts</span>
        </button>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 p-8 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/20">
                <UserPlus size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-serif uppercase tracking-tight">Assign Reviewer</h1>
                <p className="text-slate-400 text-xs mt-1 italic">Double-blind peer review coordination</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Manuscript Preview Card */}
            <div className="flex gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-20 h-24 bg-white rounded-xl border border-slate-200 flex-shrink-0 flex items-center justify-center shadow-sm">
                <BookOpen size={28} className="text-indigo-600" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-indigo-500 tracking-tighter bg-indigo-50 px-2 py-0.5 rounded">Target Manuscript</span>
                <h3 className="font-serif text-lg text-slate-900 mt-1 line-clamp-2 leading-snug">{manuscript.title}</h3>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Author: {manuscript.author?.name}</p>
              </div>
            </div>

            {/* Expert Selection Section */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">
                Select Scientific Expert
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <select
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none transition-all appearance-none text-slate-700 font-medium shadow-sm cursor-pointer"
                  value={selectedExpert}
                  onChange={(e) => setSelectedExpert(e.target.value)}
                >
                  <option value="">Choose a reviewer from database...</option>
                  {experts.map((expert) => (
                    <option key={expert._id} value={expert._id}>
                      {expert.name} — {expert.specialization || "Expert"}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                   <UserCheck size={18} />
                </div>
              </div>
              
              {selectedExpert && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-xs"
                >
                  <Mail size={14} />
                  <span>The reviewer will be notified via email automatically.</span>
                </motion.div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <button
                type="button"
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-800 transition-colors"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={submitting}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all shadow-xl ${
                  submitting 
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed" 
                  : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100 active:scale-95"
                }`}
                onClick={handleAssign}
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Processing...
                  </>
                ) : (
                  <>
                    <UserCheck size={18} />
                    Confirm Assignment
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AssignReviewerPage;