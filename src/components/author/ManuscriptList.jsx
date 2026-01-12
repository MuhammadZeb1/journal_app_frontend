import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchMyManuscripts,
  deleteManuscript,
} from "../../features/author/authorActions.jsx";
import ManuscriptCard from "./ManuscriptCard.jsx";

const ManuscriptList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { manuscripts, loading, error } = useSelector((state) => state.author);

  useEffect(() => {
    dispatch(fetchMyManuscripts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this manuscript?")) {
      dispatch(deleteManuscript(id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/author/edit/${id}`); // navigate to edit page
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">My Manuscripts</h2>

      {loading && <p>Loading manuscripts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && manuscripts.length === 0 && <p>No manuscripts uploaded yet.</p>}

      <div className="space-y-4">
        {manuscripts.map((m) => (
          <ManuscriptCard
            key={m._id}
            manuscript={m}
            onDelete={handleDelete}
            onEdit={() => handleEdit(m._id)} // pass ID for navigation
          />
        ))}
      </div>
    </div>
  );
};

export default ManuscriptList;
