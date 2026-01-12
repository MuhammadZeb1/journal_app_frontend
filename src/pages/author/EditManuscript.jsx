import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ManuscriptForm from "../../components/author/ManuscriptForm";
import { fetchMyManuscripts, updateManuscript } from "../../features/author/authorActions.jsx";

const EditManuscript = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { manuscripts, loading } = useSelector((state) => state.author);
  const [manuscript, setManuscript] = useState(null);

  useEffect(() => {
    if (!manuscripts.length) {
      dispatch(fetchMyManuscripts());
    } else {
      const m = manuscripts.find((m) => m._id === id);
      setManuscript(m);
    }
  }, [dispatch, manuscripts, id]);

  const handleUpdate = (formData) => {
    dispatch(updateManuscript({ id, formData }));
    navigate("/author/mypapers"); // redirect after update
  };

  if (!manuscript) return <p>Loading manuscript...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Edit Manuscript</h2>
      <ManuscriptForm
        initialData={manuscript}
        onSubmit={handleUpdate}
        loading={loading}
      />
    </div>
  );
};

export default EditManuscript;
