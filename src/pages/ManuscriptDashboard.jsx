import React, { useState, useEffect } from "react";
import API from "../api/authApi";
import { PlusCircle, FileText, Eye, UploadCloud, Info } from "lucide-react"; // Optional: npm install lucide-react

const ManuscriptDashboard = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchMyPapers();
  }, []);

  const fetchMyPapers = async () => {
    try {
      const res = await API.get("/manuscripts/my-papers");
      setPapers(res.data);
    } catch (err) {
      console.error("Error fetching papers", err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    setLoading(true);
    try {
      await API.post("/manuscripts/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTitle("");
      setDescription("");
      setFile(null);
      fetchMyPapers();
    } catch (err) {
      alert("Upload failed: " + err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const viewFile = (id) => {
    const url = `http://localhost:5000/api/manuscripts/file/${id}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary">Manuscript Portal</h1>
            <p className="text-base-content/70 font-medium">Manage and upload your research papers</p>
          </div>
          <div className="stats shadow bg-base-100">
            <div className="stat">
              <div className="stat-title">Total Papers</div>
              <div className="stat-value text-primary">{papers.length}</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Upload Form */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title mb-4 flex items-center gap-2">
                  <PlusCircle className="text-primary" />
                  New Submission
                </h2>
                <form onSubmit={handleUpload} className="space-y-4">
                  <div className="form-control">
                    <label className="label font-semibold">Paper Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter manuscript title..." 
                      className="input input-bordered focus:input-primary" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)} 
                      required 
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-semibold">Description</label>
                    <textarea 
                      className="textarea textarea-bordered h-24" 
                      placeholder="Brief abstract or notes..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label font-semibold">Manuscript File</label>
                    <input 
                      type="file" 
                      className="file-input file-input-bordered file-input-primary w-full"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFile(e.target.files[0])}
                      required 
                    />
                    <label className="label">
                      <span className="label-text-alt text-base-content/50 italic flex items-center gap-1">
                        <Info size={14} /> PDF or Word only (Max 10MB)
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn btn-primary w-full mt-4 ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {!loading && <UploadCloud size={18} className="mr-2" />}
                    {loading ? "Processing..." : "Submit Manuscript"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Papers Table */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="p-6">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                  <FileText className="text-secondary" />
                  My Uploaded Papers
                </h2>

                <div className="overflow-x-auto">
                  {isFetching ? (
                    <div className="flex justify-center p-10"><span className="loading loading-spinner loading-lg text-primary"></span></div>
                  ) : papers.length > 0 ? (
                    <table className="table w-full">
                      <thead className="bg-base-200">
                        <tr>
                          <th>Paper Details</th>
                          <th className="hidden md:table-cell">File Name</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {papers.map((paper) => (
                          <tr key={paper._id} className="hover">
                            <td>
                              <div className="font-bold">{paper.title}</div>
                              <div className="text-xs opacity-50 truncate max-w-[200px]">{paper.description || "No description provided"}</div>
                            </td>
                            <td className="hidden md:table-cell">
                              <span className="badge badge-ghost badge-sm">{paper.filename}</span>
                            </td>
                            <th className="text-right">
                              <button 
                                onClick={() => viewFile(paper._id)}
                                className="btn btn-ghost btn-sm text-primary flex items-center gap-2"
                              >
                                <Eye size={16} />
                                View
                              </button>
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-10">
                      <div className="text-5xl mb-4">📄</div>
                      <p className="text-base-content/50">No manuscripts uploaded yet.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuscriptDashboard;