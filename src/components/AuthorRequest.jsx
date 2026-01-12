import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestExpert } from "../features/role/roleActions";
import { Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

export default function AuthorRequest() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.role);
  const [info, setInfo] = useState("");

  const handleRequest = (e) => {
    e.preventDefault();
    if (info.trim().length >= 20) {
      dispatch(requestExpert(info));
      setInfo("");
    }
  };

  // If the request was successful, show a Success State
  if (message) {
    return (
      <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-success/10 p-4 rounded-full">
            <CheckCircle size={48} className="text-success" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Request Submitted!</h2>
        <p className="text-base-content/60 mb-6">
          Thank you for applying. An administrator will review your credentials and get back to you shortly.
        </p>
        <div className="alert alert-success shadow-sm">
          <CheckCircle size={20} />
          <span>{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold text-base-content/70">Expertise & Background</span>
        </label>
        
        <textarea
          className={`textarea textarea-bordered h-40 w-full transition-all focus:textarea-primary text-base ${
            error ? "textarea-error" : ""
          }`}
          placeholder="Describe your academic background, current position, and areas of research..."
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        
        <label className="label">
          <span className={`label-text-alt ${info.length < 20 ? 'text-warning' : 'text-success'}`}>
            {info.length < 20 
              ? `Min. 20 characters required (${20 - info.length} more)` 
              : "Minimum length reached"}
          </span>
          <span className="label-text-alt opacity-50">{info.length} characters</span>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="alert alert-error shadow-sm py-2 px-4 text-sm">
          <AlertTriangle size={16} />
          <span>{error}</span>
        </div>
      )}

      <button
        className="btn btn-primary btn-block gap-2 shadow-lg shadow-primary/20"
        onClick={handleRequest}
        disabled={loading || info.trim().length < 20}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <Send size={18} />
        )}
        {loading ? "Processing..." : "Submit Application"}
      </button>

      <p className="text-[10px] text-center uppercase tracking-widest opacity-40 pt-4">
        Your data is handled securely according to our privacy policy.
      </p>
    </div>
  );
}