import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyManuscripts,
  assignReviewer,
  publishManuscript,
  startReview,
  reviewDecision,
} from "../features/manuscript/manuscriptActions";

const ManuscriptPortal = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error, successMessage } = useSelector(
    (state) => state.manuscript
  );
  const user = useSelector((state) => state.auth.user); // Assuming auth slice exists

  useEffect(() => {
    dispatch(getMyManuscripts()); // ✅ Updated to new thunk
  }, [dispatch]);

  const handleAssign = (paperId) => {
    const reviewerId = prompt("Enter reviewer ID");
    if (reviewerId) dispatch(assignReviewer({ paperId, reviewerId }));
  };

  const handlePublish = (paperId) => {
    dispatch(publishManuscript(paperId));
  };

  const handleStartReview = (paperId) => {
    dispatch(startReview(paperId));
  };

  const handleDecision = (paperId, decision) => {
    const comments = prompt("Enter comments (optional)");
    dispatch(reviewDecision({ paperId, decision, comments }));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My Manuscripts</h2>

      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {manuscripts.map((m) => (
              <tr key={m._id}>
                <td className="border p-2">{m.title}</td>
                <td className="border p-2">{m.status}</td>
                <td className="border p-2 flex gap-2">
                  {/* ADMIN */}
                  {user?.role === "admin" && m.status === "pending" && (
                    <button
                      onClick={() => handleAssign(m._id)}
                      className="bg-yellow-500 text-white px-2 rounded"
                    >
                      Assign Reviewer
                    </button>
                  )}

                  {user?.role === "admin" && m.status === "accepted" && (
                    <button
                      onClick={() => handlePublish(m._id)}
                      className="bg-green-500 text-white px-2 rounded"
                    >
                      Publish
                    </button>
                  )}

                  {/* REVIEWER */}
                  {user?.role === "expert" && m.status === "submitted" && (
                    <button
                      onClick={() => handleStartReview(m._id)}
                      className="bg-blue-500 text-white px-2 rounded"
                    >
                      Start Review
                    </button>
                  )}

                  {user?.role === "expert" && m.status === "under_review" && (
                    <>
                      <button
                        onClick={() => handleDecision(m._id, "accepted")}
                        className="bg-green-500 text-white px-2 rounded"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDecision(m._id, "rejected")}
                        className="bg-red-500 text-white px-2 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManuscriptPortal;
