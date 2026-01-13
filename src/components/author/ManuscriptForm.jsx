import { useState, useEffect, useRef } from "react";

const ManuscriptForm = ({ initialData = {}, onSubmit, loading }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  
  // Refs to manually clear file input fields
  const fileInputRef = useRef(null);
  const thumbInputRef = useRef(null);

  useEffect(() => {
    // Only reset state if we are actually loading an existing manuscript to EDIT
    // This prevents the "disappearing text" issue when creating new ones
    if (initialData._id) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
    }
  }, [initialData._id]); // Only trigger if the ID changes

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file && !initialData._id) {
      alert("Manuscript file is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) formData.append("file", file);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    onSubmit(formData);

    // Only clear form if it's a NEW upload (not an update)
    if (!initialData._id) {
      setTitle("");
      setDescription("");
      setFile(null);
      setThumbnail(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (thumbInputRef.current) thumbInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1 text-gray-700">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter manuscript title"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief summary..."
          className="w-full border border-gray-300 px-3 py-2 rounded h-24 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Manuscript File {initialData._id ? "(Optional: replace current)" : ""}
        </label>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])} 
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Cover Image (Optional)
        </label>
        <input
          type="file"
          accept="image/*"
          ref={thumbInputRef}
          onChange={(e) => setThumbnail(e.target.files[0])}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded font-bold transition-colors ${
          loading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
        }`}
      >
        {loading ? "Processing..." : initialData._id ? "Update Manuscript" : "Upload Manuscript"}
      </button>
    </form>
  );
};

export default ManuscriptForm;