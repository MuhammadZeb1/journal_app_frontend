import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewerManuscriptCard from "../../components/reviewer/ReviewerManuscriptCard.jsx";
import { 
  fetchAssignedManuscripts, 
  startReview, 
  submitReview, 
  downloadManuscriptFile // Import the new download thunk
} from "../../features/reviewer/reviewerSlice.jsx";

const ReviewerDashboard = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector((state) => state.reviewer);

  useEffect(() => {
    dispatch(fetchAssignedManuscripts());
  }, [dispatch]);

  // FIX: This now uses the thunk which sends the token automatically
  const handleRead = (manuscript) => {
    dispatch(downloadManuscriptFile({ 
      manuscriptId: manuscript._id, 
      contentType: manuscript.contentType 
    }));
  };

  const handleStartReview = (manuscript) => {
    dispatch(startReview(manuscript._id));
  };

  // UPDATED: This matches the arguments your Card is sending (manuscript, decision, text)
  const handleSubmitReview = (manuscript, status, reviewText) => {
    dispatch(submitReview({ 
      manuscriptId: manuscript._id, 
      status, 
      reviewerComments: reviewText 
    }));
  };

  if (loading && manuscripts.length === 0) return <p className="p-10 text-center">Loading manuscripts...</p>;
  if (error) return <p className="text-red-500 p-10 text-center">{error}</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-indigo-900 uppercase">Assigned Manuscripts</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {manuscripts.map((m) => (
          <ReviewerManuscriptCard
            key={m._id}
            manuscript={m}
            onRead={handleRead}
            onStartReview={handleStartReview}
            onSubmitReview={handleSubmitReview}
          />
        ))}
      </div>
      {manuscripts.length === 0 && !loading && (
        <p className="text-gray-500 italic">No manuscripts assigned for review.</p>
      )}
    </div>
  );
};

export default ReviewerDashboard;