import React, { useState } from "react";
import API from "../api/authApi";
import { FileUp, FileText, X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const UploadPaper = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("file", file);

    setUploading(true);
    setProgress(0);
    setStatus(null);

    try {
      await API.post("/manuscripts/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });

      setStatus("success");
      setFormData({ title: "", description: "" });
      setFile(null);
      if (onUploadSuccess) onUploadSuccess();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-2xl border border-base-300 max-w-2xl mx-auto overflow-hidden">
      {/* Header Accent */}
      <div className="h-2 bg-primary w-full"></div>
      
      <div className="card-body p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 text-primary rounded-xl">
            <FileUp size={28} />
          </div>
          <div>
            <h2 className="card-title text-2xl font-black">Submit Manuscript</h2>
            <p className="text-sm opacity-60">Upload your research paper for peer review</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Input */}
          <div className="form-control w-full">
            <label className="label font-bold text-xs uppercase tracking-widest opacity-60">
              Manuscript Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Quantum Computing Advancements in 2026"
              className="input input-bordered focus:input-primary w-full transition-all"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-control w-full flex flex-col gap-2"> 
  <label className="text-xs font-bold uppercase tracking-widest opacity-60 px-1">
    Abstract / Description
  </label>
  <textarea
    name="description"
    placeholder="Briefly describe your findings..."
    className="textarea textarea-bordered focus:textarea-primary focus:ring-2 focus:ring-primary/20 h-32 w-full transition-all text-base leading-relaxed p-4 bg-base-50"
    value={formData.description}
    onChange={handleInputChange}
  />
</div>

          {/* File Drop Zone */}
          <div className="form-control w-full">
            <label className="label font-bold text-xs uppercase tracking-widest opacity-60">
              Upload Document
            </label>
            {!file ? (
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-base-300 rounded-2xl cursor-pointer hover:bg-base-200 hover:border-primary transition-all group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileUp className="w-10 h-10 mb-3 text-base-content/20 group-hover:text-primary transition-colors" />
                  <p className="mb-2 text-sm">
                    <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs opacity-50 uppercase">PDF, DOC, or DOCX (MAX 10MB)</p>
                </div>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
              </label>
            ) : (
              <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-2xl animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-3">
                  <FileText className="text-primary" size={24} />
                  <div>
                    <p className="text-sm font-bold truncate max-w-[200px] md:max-w-xs">{file.name}</p>
                    <p className="text-xs opacity-50">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => setFile(null)} 
                  className="btn btn-ghost btn-circle btn-sm text-error"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {uploading && (
            <div className="space-y-2 py-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                   <Loader2 size={14} className="animate-spin" /> Uploading to Secure Storage...
                </span>
                <span>{progress}%</span>
              </div>
              <progress className="progress progress-primary w-full h-3" value={progress} max="100"></progress>
            </div>
          )}

          {/* Status Messages */}
          {status === "success" && (
            <div className="alert alert-success shadow-lg">
              <CheckCircle size={20} />
              <span className="text-sm font-medium">Manuscript submitted successfully!</span>
            </div>
          )}
          {status === "error" && (
            <div className="alert alert-error shadow-lg">
              <AlertCircle size={20} />
              <span className="text-sm font-medium">Upload failed. Please try again.</span>
            </div>
          )}

          {/* Submit Button */}
          {!status && (
            <button
              type="submit"
              className="btn btn-primary btn-block gap-2 shadow-lg shadow-primary/20 mt-4 rounded-xl"
              disabled={uploading || !file}
            >
              {uploading ? "Please Wait..." : "Submit Manuscript"}
            </button>
          )}

          {status === "success" && (
            <button 
              type="button" 
              onClick={() => setStatus(null)} 
              className="btn btn-outline btn-block mt-4 rounded-xl"
            >
              Upload Another Paper
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadPaper;