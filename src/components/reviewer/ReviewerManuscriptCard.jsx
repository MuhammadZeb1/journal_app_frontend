// components/reviewer/ReviewerManuscriptCard.jsx
import React from "react";
import { Eye, Play, Check, X } from "lucide-react";

const statusStyles = {
  submitted: "bg-blue-100 text-blue-700",
  under_review: "bg-purple-100 text-purple-700",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-rose-100 text-rose-700",
};

const ReviewerManuscriptCard = ({ manuscript, onRead, onStartReview, onSubmitReview }) => {
  return (
    <div className="flex gap-4 border rounded-lg p-4 bg-white shadow">
      <div className="w-28 h-36 flex-shrink-0">
        {manuscript.imageUrl ? (
          <img src={manuscript.imageUrl} alt="Manuscript" className="w-full h-full object-cover rounded" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
            No Image
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{manuscript.title}</h3>
        <p className="text-sm text-gray-600">Author: {manuscript.author?.name}</p>
        <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${statusStyles[manuscript.status]}`}>
          {manuscript.status.replace("_", " ").toUpperCase()}
        </span>

        <div className="flex gap-2 mt-4">
          <button onClick={() => onRead(manuscript)} className="px-3 py-1 bg-green-600 text-white rounded flex items-center gap-1">
            <Eye size={16} /> Read
          </button>

          {manuscript.status === "submitted" && (
            <button onClick={() => onStartReview(manuscript)} className="px-3 py-1 bg-purple-600 text-white rounded flex items-center gap-1">
              <Play size={16} /> Start Review
            </button>
          )}

          {manuscript.status === "under_review" && (
            <>
              <button onClick={() => onSubmitReview(manuscript, "accepted")} className="px-3 py-1 bg-emerald-600 text-white rounded flex items-center gap-1">
                <Check size={16} /> Accept
              </button>
              <button onClick={() => onSubmitReview(manuscript, "rejected")} className="px-3 py-1 bg-rose-600 text-white rounded flex items-center gap-1">
                <X size={16} /> Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewerManuscriptCard;
