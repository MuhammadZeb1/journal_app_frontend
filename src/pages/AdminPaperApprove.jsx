import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllManuscriptsAdmin,
  assignReviewer,
  publishManuscript,
} from "../features/manuscript/manuscriptActions";

const AdminPaperApprove = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error, successMessage } = useSelector(
    (state) => state.manuscript
  );

  useEffect(() => {
    dispatch(getAllManuscriptsAdmin()); // ✅ Admin fetch all papers
  }, [dispatch]);

  const handleAssign = (paperId) => {
    const reviewerId = prompt("Enter reviewer ID");
    if (reviewerId) dispatch(assignReviewer({ paperId, reviewerId }));
  };

  const handlePublish = (paperId) => {
    dispatch(publishManuscript(paperId));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Admin Paper Approve</h2>

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
            {manuscripts
              .filter((m) => m.status === "pending" || m.status === "accepted")
              .map((m) => (
                <tr key={m._id}>
                  <td className="border p-2">{m.title}</td>
                  <td className="border p-2">{m.status}</td>
                  <td className="border p-2 flex gap-2">
                    {m.status === "pending" && (
                      <button
                        onClick={() => handleAssign(m._id)}
                        className="bg-yellow-500 text-white px-2 rounded"
                      >
                        Assign Reviewer
                      </button>
                    )}
                    {m.status === "accepted" && (
                      <button
                        onClick={() => handlePublish(m._id)}
                        className="bg-green-500 text-white px-2 rounded"
                      >
                        Publish
                      </button>
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

export default AdminPaperApprove;
