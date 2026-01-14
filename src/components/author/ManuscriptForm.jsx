import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Image as ImageIcon, Send, Loader2 } from "lucide-react";
import { toast } from "react-toastify"; // Import Toast

const ManuscriptForm = ({ initialData = {}, onSubmit, loading }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  
  const fileInputRef = useRef(null);
  const thumbInputRef = useRef(null);

  useEffect(() => {
    if (initialData._id) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
    }
  }, [initialData._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation with Toasts
    if (!file && !initialData._id) {
      toast.error("Manuscript file is required for submission");
      return;
    }

    if (title.length < 5) {
      toast.warn("Please provide a more descriptive title");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) formData.append("file", file);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    // Triggering the submission
    onSubmit(formData);
    
    // We notify the user that processing has started
    toast.info("Uploading your manuscript...");

    if (!initialData._id) {
      setTitle("");
      setDescription("");
      setFile(null);
      setThumbnail(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (thumbInputRef.current) thumbInputRef.current.value = "";
    }
  };

  const fieldVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div variants={fieldVariant} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
          Manuscript Title
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Cognitive Behavioral Impacts on Memory"
          className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50/50 shadow-sm"
        />
      </motion.div>

      <motion.div variants={fieldVariant} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
          Abstract / Brief Summary
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Briefly describe the purpose, methodology, and results..."
          className="w-full border border-slate-200 px-4 py-3 rounded-xl h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50/50 resize-none shadow-sm"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fieldVariant} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide flex items-center gap-2">
            <FileText size={16} className="text-indigo-600" />
            Manuscript File
          </label>
          <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-indigo-50/50 transition-colors cursor-pointer group">
            <input 
              type="file" 
              ref={fileInputRef}
              required={!initialData._id}
              onChange={(e) => {
                setFile(e.target.files[0]);
                if(e.target.files[0]) toast.success(`File selected: ${e.target.files[0].name}`);
              }} 
              className="w-full text-xs text-slate-500 file:hidden cursor-pointer"
            />
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">PDF, DOCX allowed</p>
          </div>
        </motion.div>

        <motion.div variants={fieldVariant} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide flex items-center gap-2">
            <ImageIcon size={16} className="text-indigo-600" />
            Cover Image
          </label>
          <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-indigo-50/50 transition-colors cursor-pointer group">
            <input
              type="file"
              accept="image/*"
              ref={thumbInputRef}
              onChange={(e) => {
                setThumbnail(e.target.files[0]);
                if(e.target.files[0]) toast.success("Image preview loaded");
              }}
              className="w-full text-xs text-slate-500 file:hidden cursor-pointer"
            />
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">Optional: JPEG, PNG</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-lg ${
          loading 
            ? "bg-slate-400 cursor-not-allowed text-white" 
            : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Uploading to Editorial Board...
          </>
        ) : (
          <>
            <Send size={18} />
            {initialData._id ? "Update Manuscript" : "Submit for Review"}
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ManuscriptForm;