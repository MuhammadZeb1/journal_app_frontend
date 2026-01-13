// pages/admin/AssignReviewerPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/authApi.js";

const AssignReviewerPage = () => {
  const { manuscriptId } = useParams(); // route param
  const navigate = useNavigate();

  const [manuscript, setManuscript] = useState(null);
  const [experts, setExperts] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState("");
  console.log('experts',experts)

  useEffect(() => {
    // 1️⃣ Fetch the manuscript
    const fetchManuscript = async () => {
      try {
        const res = await API.get(`/admin/manuscripts`);
        const m = res.data.find((m) => m._id === manuscriptId);
        setManuscript(m);
      } catch (err) {
        console.error("Failed to fetch manuscript:", err);
      }
    };

    // 2️⃣ Fetch experts
    const fetchExperts = async () => {
      try {
        const res = await API.get("/admin/experts");
        setExperts(res.data);
      } catch (err) {
        console.error("Failed to fetch experts:", err);
      }
    };

    fetchManuscript();
    fetchExperts();
  }, [manuscriptId]);

  const handleAssign = async () => {
    if (!selectedExpert) return alert("Select an expert first!");

    try {
      await API.post("/admin/manuscripts/assign-reviewer", {
        manuscriptId,
        reviewerId: selectedExpert,
      });
      alert("Reviewer assigned successfully!");
      navigate(-1); // go back to manuscripts page
    } catch (err) {
      console.error(err);
      alert("Failed to assign reviewer");
    }
  };

  if (!manuscript) return <p>Loading manuscript...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Assign Reviewer</h2>
      <p className="mb-4">
        Manuscript: <strong>{manuscript.title}</strong>
      </p>

      <select
        className="w-full border p-2 rounded mb-4"
        value={selectedExpert}
        onChange={(e) => setSelectedExpert(e.target.value)}
      >
        <option value="">Select Expert</option>
        {experts.map((expert) => (
          <option key={expert._id} value={expert._id}>
            {expert.name} ({expert.email})
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleAssign}
        >
          Assign
        </button>
      </div>
    </div>
  );
};

export default AssignReviewerPage;
