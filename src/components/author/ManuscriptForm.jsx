import { useState, useEffect } from "react";

const ManuscriptForm = ({ initialData = {}, onSubmit, loading }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    setTitle(initialData.title || "");
    setDescription(initialData.description || "");
  }, [initialData]);

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

    if (!initialData._id) {
      setTitle("");
      setDescription("");
      setFile(null);
      setThumbnail(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">
          Manuscript File {initialData._id ? "(optional to replace)" : ""}
        </label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>

      <div>
        <label className="block font-medium mb-1">
          Cover Image (optional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : initialData._id ? "Update Manuscript" : "Upload Manuscript"}
      </button>
    </form>
  );
};

export default ManuscriptForm;
