import { useEffect, useState } from "react";
import { fetchPublishedManuscripts } from "../api/publishedManuscriptApi";

const PublishedManuscripts = () => {
  const [manuscripts, setManuscripts] = useState([]); // ✅ array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadManuscripts = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchPublishedManuscripts();

      // ✅ FIX: handle object OR array response
      const papers = Array.isArray(data)
        ? data
        : data.manuscripts || [];

      setManuscripts(papers);
    } catch (err) {
      setError("Failed to load published papers");
    } finally {
      setLoading(false);
    }
  };

  // FIRST LOAD
  useEffect(() => {
    loadManuscripts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📄 Published Papers</h2>

      <button onClick={loadManuscripts} style={{ marginBottom: "15px" }}>
        🔄 Refresh
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && manuscripts.length === 0 && (
        <p>No published papers found.</p>
      )}

      {manuscripts.map((paper) => (
        <div
          key={paper._id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <h3>{paper.title}</h3>
          <p>{paper.description}</p>

          <p>
            <strong>Author:</strong>{" "}
            {paper.author?.name || "Unknown"}
          </p>

          <p>
            <strong>Published At:</strong>{" "}
            {paper.publishedAt
              ? new Date(paper.publishedAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PublishedManuscripts;
