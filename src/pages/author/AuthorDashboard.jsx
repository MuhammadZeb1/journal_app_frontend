import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManuscriptTable from "../../components/ManuscriptTable";
import { getMyManuscripts } from "../../features/manuscript/manuscriptActions";

const AuthorDashboard = () => {
  const dispatch = useDispatch();
  const { authorPapers, loading, error, successMessage } = useSelector(
    (state) => state.manuscripts
  );

  useEffect(() => {
    dispatch(getMyManuscripts());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My Uploaded Papers</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      {loading && <p>Loading...</p>}

      <ManuscriptTable
        papers={authorPapers || []}
        actions={(paper) => (
          <>
            {paper.reviewerComments && (
              <p className="text-blue-600">
                <b>Reviewer Comments:</b> {paper.reviewerComments}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default AuthorDashboard;
