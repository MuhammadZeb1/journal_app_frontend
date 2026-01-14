import React from "react";
import { Eye, UserCheck, BookOpenCheck, Calendar, User, UploadCloud, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglePublishStatus } from "../../features/admin/adminSlice.jsx";
import { toast } from "react-toastify";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  submitted: "bg-blue-50 text-blue-700 border-blue-200",
  under_review: "bg-indigo-50 text-indigo-700 border-indigo-200",
  accepted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rejected: "bg-rose-50 text-rose-700 border-rose-200",
  published: "bg-slate-900 text-indigo-400 border-slate-800",
};

const AdminManuscriptCard = ({ manuscript, onRead }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTogglePublish = async () => {
    const action = manuscript.status === "published" ? "Unpublish" : "Publish";
    if (window.confirm(`Are you sure you want to ${action} this manuscript?`)) {
      try {
        await dispatch(togglePublishStatus(manuscript._id)).unwrap();
        toast.success(`Manuscript ${action}ed successfully`);
      } catch (err) {
        toast.error(err || "Failed to update status");
      }
    }
  };

  return (
    <div className="group relative flex flex-col sm:flex-row gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
      {/* Thumbnail Section */}
      <div className="w-full sm:w-32 h-44 flex-shrink-0 relative overflow-hidden rounded-xl bg-slate-100 shadow-inner">
        {manuscript.imageUrl ? (
          <img src={manuscript.imageUrl} alt="Cover" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
            <BookOpenCheck size={32} strokeWidth={1.5} />
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-md border shadow-sm uppercase ${statusStyles[manuscript.status]}`}>
            {manuscript.status.replace("_", " ")}
          </span>
        </div>
      </div>

      {/* Info Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg leading-tight text-slate-900 group-hover:text-indigo-600 line-clamp-2">
            {manuscript.title}
          </h3>
          <div className="mt-3 space-y-1.5 text-xs text-slate-500">
            <div className="flex items-center gap-2"><User size={14} className="text-indigo-500" /> {manuscript.author?.name}</div>
            <div className="flex items-center gap-2"><Calendar size={14} /> {new Date(manuscript.createdAt).toLocaleDateString()}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-5">
          <button onClick={() => onRead(manuscript)} className="flex-1 px-3 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-100 flex items-center justify-center gap-2">
            <Eye size={14} /> Read
          </button>

          {manuscript.status === "pending" && (
            <button onClick={() => navigate(`/admin/assign-reviewer/${manuscript._id}`)} className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center justify-center gap-2">
              <UserCheck size={14} /> Assign
            </button>
          )}

          {(manuscript.status === "accepted" || manuscript.status === "published") && (
            <button 
              onClick={handleTogglePublish}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                manuscript.status === "published" 
                ? "bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100" 
                : "bg-slate-900 text-white hover:bg-black"
              }`}
            >
              {manuscript.status === "published" ? <><XCircle size={14}/> Unpublish</> : <><UploadCloud size={14}/> Publish</>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminManuscriptCard;