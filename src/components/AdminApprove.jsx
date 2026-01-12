import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getExpertRequests, 
  approveExpert, 
  rejectExpert 
} from "../features/role/roleActions";
import { 
  UserCheck, 
  UserX, 
  Mail, 
  MessageSquare, 
  ShieldAlert, 
  Loader2 
} from "lucide-react";

export default function AdminApprove() {
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(getExpertRequests());
  }, [dispatch]);

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-base-content flex items-center gap-3">
              <ShieldAlert className="text-primary" size={32} />
              Expert Approvals
            </h1>
            <p className="text-base-content/60 mt-1">Review credentials and upgrade user roles</p>
          </div>
          <div className="badge badge-primary badge-outline p-4 font-bold">
            {requests.length} Pending Requests
          </div>
        </div>

        {/* Content Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="overflow-x-auto">
            <table className="table table-lg w-full">
              {/* Table Head */}
              <thead className="bg-base-200/50">
                <tr>
                  <th className="text-sm uppercase tracking-wider">Applicant</th>
                  <th className="text-sm uppercase tracking-wider">Background Info</th>
                  <th className="text-sm uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id} className="hover:bg-base-200/30 transition-colors">
                    {/* User Column */}
                    <td>
                      <div className="flex items-center gap-4">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-primary-content rounded-full w-12 shadow-md">
                            <span className="text-lg font-bold">
                              {req.user.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="font-black text-base">{req.user.name}</div>
                          <div className="text-sm opacity-60 flex items-center gap-1">
                            <Mail size={14} /> {req.user.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Message Column */}
                    <td>
                      <div className="flex items-start gap-2 max-w-md">
                        <MessageSquare size={16} className="mt-1 opacity-40 shrink-0" />
                        <p className="text-sm leading-relaxed italic">
                          "{req.message || "No expertise statement provided."}"
                        </p>
                      </div>
                    </td>

                    {/* Actions Column */}
                    <td>
                      <div className="flex justify-end gap-3">
                        <button
                          className="btn btn-ghost btn-sm text-error hover:bg-error/10 gap-2"
                          onClick={() => {
                             if(window.confirm("Reject this request?")) dispatch(rejectExpert(req._id))
                          }}
                          disabled={loading}
                        >
                          <UserX size={18} />
                          Reject
                        </button>

                        <button
                          className="btn btn-primary btn-sm gap-2 shadow-lg shadow-primary/20"
                          onClick={() => dispatch(approveExpert(req._id))}
                          disabled={loading}
                        >
                          {loading ? <Loader2 className="animate-spin" size={18} /> : <UserCheck size={18} />}
                          Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {requests.length === 0 && !loading && (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-base-200 mb-4">
                  <UserCheck size={40} className="opacity-20" />
                </div>
                <h3 className="text-xl font-bold opacity-50">All caught up!</h3>
                <p className="text-base-content/40">There are no pending expert applications.</p>
              </div>
            )}
            
            {/* Loading Placeholder */}
            {loading && requests.length === 0 && (
              <div className="p-10 flex justify-center">
                <span className="loading loading-ring loading-lg text-primary"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}