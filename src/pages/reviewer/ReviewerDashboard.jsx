// pages/reviewer/ReviewerDashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewerManuscriptCard from "../../components/reviewer/ReviewerManuscriptCard.jsx";
import { fetchAssignedManuscripts, startReview, submitReview } from "../../features/reviewer/reviewerSlice.jsx";

const ReviewerDashboard = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector((state) => state.reviewer);

  useEffect(() => {
    dispatch(fetchAssignedManuscripts());
  }, [dispatch]);

  const handleRead = (manuscript) => {
    window.open(`http://localhost:5000/api/reviewer/manuscripts/${manuscript._id}/file`, "_blank");
  };

  const handleStartReview = (manuscript) => {
    dispatch(startReview(manuscript._id));
  };

  const handleSubmitReview = (manuscript, status) => {
    const comments = prompt("Add review comments (optional):", manuscript.reviewerComments || "");
    dispatch(submitReview({ manuscriptId: manuscript._id, status, reviewerComments: comments }));
  };

  if (loading) return <p>Loading manuscripts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default ReviewerDashboard;
