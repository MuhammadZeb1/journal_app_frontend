import React, { useState } from 'react';
import axios from 'axios';
import { FileText, Eye, Edit3, Trash2, Calendar, MessageSquare, X } from 'lucide-react';

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  under_review: "bg-purple-100 text-purple-700 border-purple-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-rose-100 text-rose-700 border-rose-200",
  published: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

const ManuscriptCard = ({ manuscript, onDelete, onEdit }) => {
  const [showReview, setShowReview] = useState(false);

  const handleViewFile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `http://localhost:5000/api/author/manuscripts/${manuscript._id}/file`,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'blob',
        }
      );
      const file = new Blob([response.data], { type: manuscript.contentType });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
      setTimeout(() => URL.revokeObjectURL(fileURL), 5000);
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 overflow-hidden h-full group">
        
        {/* 1. TOP SECTION: Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
          {manuscript.imageUrl ? (
            <img
              src={manuscript.imageUrl}
              alt="Manuscript Preview"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50/30 to-slate-50 text-slate-300">
               <div className="w-16 h-20 bg-white shadow-md rounded-sm border-l-4 border-indigo-600 flex items-center justify-center">
                  <FileText size={32} strokeWidth={1.5} className="text-slate-200" />
               </div>
               <span className="text-[10px] mt-3 uppercase font-bold tracking-widest text-slate-400">Scientific Article</span>
            </div>
          )}
          
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-tighter border shadow-sm uppercase ${statusStyles[manuscript.status] || statusStyles.pending}`}>
              {manuscript.status.replace("_", " ")}
            </span>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: Content */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
            {manuscript.title}
          </h3>
          
          <div className="flex items-center justify-between mt-auto pt-4">
            <div className="flex items-center text-[12px] font-medium text-slate-400">
               <Calendar size={14} className="mr-1.5 text-indigo-500" />
               {new Date(manuscript.createdAt).toLocaleDateString()}
            </div>

            {/* Change Detail to Review Button (Only if reviewed or has comments) */}
            {(manuscript.reviewerComments || manuscript.reviewedAt) && (
              <button 
                onClick={() => setShowReview(true)}
                className="text-indigo-600 text-[11px] font-bold uppercase tracking-widest flex items-center hover:underline bg-indigo-50 px-3 py-1 rounded-full transition-all"
              >
                <MessageSquare size={12} className="mr-1" /> Review
              </button>
            )}
          </div>
        </div>

        {/* 3. BOTTOM SECTION: Action Bar */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={handleViewFile}
            className="flex-1 flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
          >
            <Eye size={16} className="mr-2" /> View
          </button>

          {manuscript.status === "pending" && (
            <div className="flex gap-2">
              <button onClick={() => onEdit(manuscript)} className="p-2.5 text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-indigo-50 transition-all shadow-sm">
                <Edit3 size={18} />
              </button>
              <button onClick={() => onDelete(manuscript._id)} className="p-2.5 text-rose-500 bg-white border border-slate-200 rounded-xl hover:bg-rose-50 transition-all shadow-sm">
                <Trash2 size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- REVIEW POPUP (MODAL) --- */}
      {showReview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Reviewer Feedback</h2>
                  <p className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-tighter">Status: {manuscript.status}</p>
                </div>
                <button 
                  onClick={() => setShowReview(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Comments Section */}
                <div className="bg-indigo-50/50 p-6 rounded-[1.5rem] border border-indigo-100">
                  <h4 className="text-indigo-600 text-xs font-black uppercase tracking-widest mb-3">Comments</h4>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{manuscript.reviewerComments || "No specific comments provided."}"
                  </p>
                </div>

                {/* Timeline Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Reviewed On</p>
                    <p className="text-xs font-bold text-slate-800 mt-1">
                      {manuscript.reviewedAt ? new Date(manuscript.reviewedAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">File ID</p>
                    <p className="text-[10px] font-mono font-bold text-indigo-600 mt-1 truncate">
                      {manuscript.fileId}
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowReview(false)}
                className="w-full mt-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                Close Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManuscriptCard;