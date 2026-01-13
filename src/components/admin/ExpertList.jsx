import React, { useEffect, useState } from "react";
import API from "../../api/authApi";

const ExpertList = ({ onSelect }) => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);
        const res = await API.get("/admin/experts");
        setExperts(res.data);
      } catch (err) {
        setError("Failed to fetch experts");
      } finally {
        setLoading(false);
      }
    };
    fetchExperts();
  }, []);

  if (loading) return <p>Loading experts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!experts.length) return <p>No experts found.</p>;

  return (
    <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
      {experts.map((expert) => (
        <button
          key={expert._id}
          onClick={() => onSelect(expert)}
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-left"
        >
          {expert.name} ({expert.email})
        </button>
      ))}
    </div>
  );
};

export default ExpertList;
