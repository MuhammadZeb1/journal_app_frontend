// pages/admin/AdminManuscripts.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminManuscriptCard from "../../components/admin/AdminManuscriptCard.jsx";
import AssignReviewerModal from "../../components/admin/AssignReviewerPage.jsx";
import { fetchAllManuscripts } from "../../features/admin/adminSlice.jsx";

const AdminManuscripts = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector(
    (state) => state.adminManuscripts
  );

  const [selectedManuscript, setSelectedManuscript] = useState(null);

  useEffect(() => {
    dispatch(fetchAllManuscripts());
  }, [dispatch]);

  const handleRead = (manuscript) => {
    // logic to read the manuscript (open PDF or file)
    console.log("Read manuscript:", manuscript.title);
  };

  const handleAssign = (manuscript) => {
    setSelectedManuscript(manuscript);
  };

  if (loading) return <p>Loading manuscripts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {manuscripts.map((m) => (
        <AdminManuscriptCard
          key={m._id}
          manuscript={m}
          onAssign={handleAssign}
          onRead={handleRead}
        />
      ))}

      {selectedManuscript && (
        <AssignReviewerModal
          manuscript={selectedManuscript}
          onClose={() => setSelectedManuscript(null)}
          onAssigned={() => {
            dispatch(fetchAllManuscripts()); // refresh after assignment
            setSelectedManuscript(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminManuscripts;
