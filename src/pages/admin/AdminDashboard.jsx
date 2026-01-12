import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManuscriptTable from "../../components/ManuscriptTable";
import {
  getAllManuscriptsAdmin,
  assignReviewer,
  publishManuscript,
} from "../../features/manuscript/manuscriptActions";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { adminPapers, loading, error, successMessage } = useSelector(
    (state) => state.manuscripts
  );

  useEffect(() => {
    dispatch(getAllManuscriptsAdmin());
  }, [dispatch]);

  const handleAssignReviewer = (paperId) => {
    const reviewerId = prompt("Enter Reviewer ID");
    if (reviewerId) {
      dispatch(assignReviewer({ paperId, reviewerId }));
    }
  };

  const handlePublish = (paperId) => {
    dispatch(publishManuscript(paperId));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      {loading && <p>Loading...</p>}

      <ManuscriptTable
        papers={adminPapers || []}
        actions={(paper) => (
          <>
            {paper.status === "pending" && (
              <button
                onClick={() => handleAssignReviewer(paper._id)}
                className="bg-yellow-500 text-white px-2 rounded"
              >
                Assign Reviewer
              </button>
            )}
            {paper.status === "accepted" && (
              <button
                onClick={() => handlePublish(paper._id)}
                className="bg-green-500 text-white px-2 rounded"
              >
                Publish
              </button>
            )}
          </>
        )}
      />
    </div>
  );
};

export default AdminDashboard;
