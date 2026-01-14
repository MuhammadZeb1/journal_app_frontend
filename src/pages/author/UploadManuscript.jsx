import { useDispatch, useSelector } from "react-redux";
import ManuscriptForm from "../../components/author/ManuscriptForm.jsx";
import { createManuscript } from "../../features/author/authorActions.jsx";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

const NEW_MANUSCRIPT_DEFAULT = {};

const UploadManuscript = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.author);

  const handleCreate = (formData) => {
    dispatch(createManuscript(formData));
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 overflow-hidden"
      >
        <div className="bg-slate-900 p-8 text-white">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-indigo-600 rounded-lg">
              <UploadCloud size={24} />
            </div>
            <h1 className="text-3xl font-serif uppercase tracking-tight">
              Submit New Work
            </h1>
          </div>
          <p className="text-slate-400 text-sm italic">
            Please ensure your manuscript adheres to the journal's formatting guidelines before uploading.
          </p>
        </div>

        <div className="p-8">
          <ManuscriptForm
            initialData={NEW_MANUSCRIPT_DEFAULT}
            onSubmit={handleCreate}
            loading={loading}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default UploadManuscript;