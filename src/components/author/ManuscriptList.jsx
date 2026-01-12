import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyManuscripts,
  deleteManuscript,
  updateManuscript,
} from "../../features/author/authorActions.jsx";
import ManuscriptCard from "./ManuscriptCard.jsx";
import ManuscriptForm from "./ManuscriptForm.jsx";

const ManuscriptList = () => {
  const dispatch = useDispatch();
  const { manuscripts, loading, error } = useSelector((state) => state.author);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    dispatch(fetchMyManuscripts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this manuscript?")) {
      dispatch(deleteManuscript(id));
    }
  };

  const handleEdit = (manuscript) => {
    setEditing(manuscript);
  };

  const handleUpdate = (formData) => {
    dispatch(updateManuscript({ id: editing._id, formData }));
    setEditing(null);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">My Manuscripts</h2>

      {editing && (
        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-3">Edit Manuscript</h3>
          <ManuscriptForm
            initialData={editing}
            onSubmit={handleUpdate}
            loading={loading}
          />
        </div>
      )}

      {loading && <p>Loading manuscripts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && manuscripts.length === 0 && <p>No manuscripts uploaded yet.</p>}

      <div className="space-y-4">
        {manuscripts.map((m) => (
          <ManuscriptCard
            key={m._id}
            manuscript={m}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ManuscriptList;
