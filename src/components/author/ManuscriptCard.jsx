import React, { useState } from 'react';
import axios from 'axios';
import {
  FileText,
  Eye,
  Edit3,
  Trash2,
  Calendar,
  MessageSquare,
  X,
  User,
  BookOpenCheck
} from 'lucide-react';

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  submitted: "bg-blue-50 text-blue-700 border-blue-200",
  under_review: "bg-indigo-50 text-indigo-700 border-indigo-200",
  accepted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rejected: "bg-rose-50 text-rose-700 border-rose-200",
  published: "bg-slate-900 text-indigo-400 border-slate-800",
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
      {/* ===== ADMIN CARD STYLE START ===== */}
      <div className="group relative flex flex-col sm:flex-row gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
        
        {/* Thumbnail */}
        <div className="w-full sm:w-32 h-44 flex-shrink-0 relative overflow-hidden rounded-xl bg-slate-100 shadow-inner">
          {manuscript.imageUrl ? (
            <img
              src={manuscript.imageUrl}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <BookOpenCheck size={32} strokeWidth={1.5} />
            </div>
          )}

          {/* Status */}
          <div className="absolute top-2 left-2">
            <span
              className={`text-[10px] font-bold px-2 py-1 rounded-md border shadow-sm uppercase ${
                statusStyles[manuscript.status]
              }`}
            >
              {manuscript.status.replace("_", " ")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg leading-tight text-slate-900 group-hover:text-indigo-600 line-clamp-2">
              {manuscript.title}
            </h3>

            <div className="mt-3 space-y-1.5 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <User size={14} className="text-indigo-500" />
                Author
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(manuscript.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-5">
            <button
              onClick={handleViewFile}
              className="flex-1 px-3 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-100 flex items-center justify-center gap-2"
            >
              <Eye size={14} /> View
            </button>

            {(manuscript.reviewerComments || manuscript.reviewedAt) && (
              <button
                onClick={() => setShowReview(true)}
                className="flex-1 px-3 py-2 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg text-xs font-bold hover:bg-indigo-100 flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} /> Review
              </button>
            )}

            {manuscript.status === "pending" && (
              <>
                <button
                  onClick={() => onEdit(manuscript)}
                  className="px-3 py-2 bg-white text-slate-600 border border-slate-200 rounded-lg hover:bg-indigo-50"
                >
                  <Edit3 size={14} />
                </button>

                <button
                  onClick={() => onDelete(manuscript._id)}
                  className="px-3 py-2 bg-white text-rose-500 border border-slate-200 rounded-lg hover:bg-rose-50"
                >
                  <Trash2 size={14} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* ===== ADMIN CARD STYLE END ===== */}

      {/* ===== REVIEW MODAL (UNCHANGED) ===== */}
      {showReview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-bold">Reviewer Feedback</h2>
                <button onClick={() => setShowReview(false)}>
                  <X />
                </button>
              </div>

              <p className="text-sm text-slate-600 italic">
                {manuscript.reviewerComments || "No comments"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManuscriptCard;
