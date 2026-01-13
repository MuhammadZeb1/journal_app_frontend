// components/admin/AdminManuscriptCard.jsx
import React from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  under_review: "bg-purple-100 text-purple-700 border-purple-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-rose-100 text-rose-700 border-rose-200",
  published: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

const AdminManuscriptCard = ({ manuscript, onRead }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 border rounded-lg p-4 bg-white shadow">
      {/* Thumbnail */}
      <div className="w-28 h-36 flex-shrink-0">
        {manuscript.imageUrl ? (
          <img
            src={manuscript.imageUrl}
            alt="Manuscript thumbnail"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
            No Image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{manuscript.title}</h3>
        <p className="text-sm text-gray-600">Author: {manuscript.author?.name}</p>
        <span
          className={`inline-block mt-2 text-xs px-2 py-1 rounded ${statusStyles[manuscript.status]}`}
        >
          {manuscript.status.replace("_", " ").toUpperCase()}
        </span>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onRead(manuscript)}
            className="px-3 py-1 bg-green-600 text-white rounded flex items-center gap-1"
          >
            <Eye size={16} /> Read
          </button>

          {manuscript.status === "pending" && (
            <button
              onClick={() => navigate(`/admin/assign-reviewer/${manuscript._id}`)}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Assign
            </button>
          )}

          {manuscript.status === "accepted" && (
            <button className="px-3 py-1 bg-purple-600 text-white rounded">
              Publish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminManuscriptCard;
