import React from 'react';
import axios from 'axios';
import { FileText, Eye, Edit3, Trash2, Calendar, HardDrive } from 'lucide-react';

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  under_review: "bg-purple-100 text-purple-700 border-purple-200",
  accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
  rejected: "bg-rose-100 text-rose-700 border-rose-200",
  published: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

const ManuscriptCard = ({ manuscript, onDelete, onEdit }) => {
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
    <div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full group">
      
      {/* 1. Top Section: Image/Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 border-b border-gray-100">
        {manuscript.imageUrl ? (
          <img
            src={manuscript.imageUrl}
            alt="Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
            <FileText size={48} strokeWidth={1} />
            <span className="text-xs mt-2 uppercase font-semibold">No Preview</span>
          </div>
        )}
        
        {/* Status Badge Over Image */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border shadow-sm ${statusStyles[manuscript.status]}`}>
            {manuscript.status.replace("_", " ").toUpperCase()}
          </span>
        </div>
      </div>

      {/* 2. Middle Section: Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-gray-900 text-lg line-clamp-1 mb-2">
          {manuscript.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
          {manuscript.description || "No description provided for this manuscript."}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 py-3 border-t border-gray-50 text-[11px] text-gray-400 font-medium">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5 text-indigo-500" />
            {new Date(manuscript.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center justify-end">
            <HardDrive size={14} className="mr-1.5 text-indigo-500" />
            {(manuscript.fileSize / 1024 / 1024).toFixed(2)} MB
          </div>
        </div>
      </div>

      {/* 3. Bottom Section: Action Bar */}
      <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between gap-2">
        <button
          onClick={handleViewFile}
          className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Eye size={16} className="mr-2" />
          View
        </button>

        {manuscript.status === "pending" && (
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(manuscript)}
              className="p-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              title="Edit"
            >
              <Edit3 size={18} />
            </button>
            <button
              onClick={() => onDelete(manuscript._id)}
              className="p-2 text-rose-600 bg-rose-50 border border-rose-100 rounded-lg hover:bg-rose-100 transition-colors"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManuscriptCard;