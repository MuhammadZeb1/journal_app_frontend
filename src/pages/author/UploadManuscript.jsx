import { useDispatch, useSelector } from "react-redux";
import ManuscriptForm from "../../components/auther/ManuscriptForm.jsx";
import { createManuscript } from "../../features/Auther/authorActions.jsx";

const UploadManuscript = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.author);

  const handleCreate = (formData) => {
    dispatch(createManuscript(formData));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">
        Upload New Manuscript
      </h1>

      <ManuscriptForm
        onSubmit={handleCreate}
        loading={loading}
      />
    </div>
  );
};

export default UploadManuscript;
