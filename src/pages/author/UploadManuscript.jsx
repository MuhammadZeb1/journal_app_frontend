import { useDispatch, useSelector } from "react-redux";
import ManuscriptForm from "../../components/author/ManuscriptForm.jsx";
import { createManuscript } from "../../features/author/authorActions.jsx";

// Define an empty object outside the component to keep a stable reference
const NEW_MANUSCRIPT_DEFAULT = {};

const UploadManuscript = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.author);

  const handleCreate = (formData) => {
    dispatch(createManuscript(formData));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl border border-gray-100">
      <div className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Submit New Work
        </h1>
        <p className="text-gray-500 mt-1">Fill in the details below to upload your manuscript.</p>
      </div>

      <ManuscriptForm
        initialData={NEW_MANUSCRIPT_DEFAULT}
        onSubmit={handleCreate}
        loading={loading}
      />
    </div>
  );
};

export default UploadManuscript;