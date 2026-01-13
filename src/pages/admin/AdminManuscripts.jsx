import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllManuscripts } from "../../features/admin/adminSlice.jsx";
import AdminManuscriptCard from "../../components/admin/AdminManuscriptCard.jsx";

const AdminManuscripts = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector((state) => state.adminManuscripts);

  useEffect(() => {
    dispatch(fetchAllManuscripts());
  }, [dispatch]);

  if (loading) return <p>Loading manuscripts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!manuscripts || manuscripts.length === 0)
    return <p>No manuscripts found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {manuscripts.map((manuscript) => (
        <AdminManuscriptCard
          key={manuscript._id}
          manuscript={manuscript} // ✅ make sure this exists
        />
      ))}
    </div>
  );
};

export default AdminManuscripts;
