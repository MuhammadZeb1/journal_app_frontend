import { useState } from "react";

const ManuscriptForm = ({ onSubmit, loading }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Manuscript file is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    onSubmit(formData);

    setTitle("");
    setDescription("");
    setFile(null);
    setThumbnail(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
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

      {/* Description */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      {/* Manuscript File */}
      <div>
        <label className="block font-medium mb-1">Manuscript File</label>
        <input
          type="file"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      {/* Thumbnail */}
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
        {loading ? "Uploading..." : "Upload Manuscript"}
      </button>
    </form>
  );
};

export default ManuscriptForm;
