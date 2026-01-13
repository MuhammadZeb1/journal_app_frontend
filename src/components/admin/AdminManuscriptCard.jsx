import React from "react";
import API from "../../api/authApi";
import { FileText, Eye } from "lucide-react";

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  under_review: "bg-purple-100 text-purple-700 border-purple-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-rose-100 text-rose-700 border-rose-200",
  published: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

const AdminManuscriptCard = ({ manuscript }) => {
  if (!manuscript) return null; // safety check

  const handleView = async () => {
    try {
      const res = await API.get(`/admin/manuscripts/${manuscript._id}/file`, {
        responseType: "blob",
      });

      const fileURL = URL.createObjectURL(
        new Blob([res.data], { type: manuscript.contentType })
      );
      window.open(fileURL, "_blank");
      setTimeout(() => URL.revokeObjectURL(fileURL), 5000);
    } catch (err) {
      alert("Failed to open manuscript");
    }
  };

  return (
    <div className="flex flex-col border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
      
      {/* Thumbnail */}
      <div className="w-full h-40 mb-3 relative">
        {manuscript.imageUrl ? (
          <img
            src={manuscript.imageUrl}
            alt="Manuscript Thumbnail"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs rounded">
            <FileText size={32} />
            <span className="ml-2">No Image</span>
          </div>
        )}

        {/* Status badge */}
        <span
          className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${statusStyles[manuscript.status]}`}
        >
          {manuscript.status.replace("_", " ").toUpperCase()}
        </span>
      </div>

      {/* Manuscript info */}
      <h3 className="font-semibold text-lg mb-1">{manuscript.title || "Untitled"}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Author: {manuscript.author?.name || "Unknown"}
      </p>
      <p className="text-xs text-gray-500 mb-3">
        {manuscript.description || "No description available."}
      </p>

      {/* Actions */}
      <div className="flex gap-2">
        {/* Always available */}
        <button
          onClick={handleView}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Eye size={16} /> Read
        </button>

        {/* Conditional buttons */}
        {manuscript.status === "pending" && (
          <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Assign
          </button>
        )}

        {manuscript.status === "accepted" && (
          <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Publish
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminManuscriptCard;
