import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManuscriptTable from "../../components/ManuscriptTable";
import {
  getAssignedManuscripts,
  startReview,
  reviewDecision,
} from "../../features/manuscript/manuscriptActions";

const ReviewerDashboard = () => {
  const dispatch = useDispatch();
  const { reviewerPapers, loading, error, successMessage } = useSelector(
    (state) => state.manuscripts
  );

  useEffect(() => {
    dispatch(getAssignedManuscripts());
  }, [dispatch]);

  const handleDecision = (id, decision) => {
    const comments = prompt("Enter review comments (optional)");
    dispatch(reviewDecision({ paperId: id, decision, comments }));
  };

  const handleStartReview = (id) => {
    dispatch(startReview(id));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Reviewer Dashboard</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      {loading && <p>Loading...</p>}

      <ManuscriptTable
        papers={reviewerPapers || []}
        actions={(paper) => (
          <>
            {paper.status === "submitted" && (
              <button
                onClick={() => handleStartReview(paper._id)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Start Review
              </button>
            )}
            {paper.status === "under_review" && (
              <>
                <button
                  onClick={() => handleDecision(paper._id, "accepted")}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecision(paper._id, "rejected")}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </>
            )}
            {paper.reviewerComments && (
              <p className="text-blue-600 mt-1">
                <b>Your Comment:</b> {paper.reviewerComments}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ReviewerDashboard;
