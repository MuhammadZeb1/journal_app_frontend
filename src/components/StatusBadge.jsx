const StatusBadge = ({ status }) => {
  const colors = {
    pending: "gray",
    submitted: "blue",
    under_review: "orange",
    accepted: "green",
    rejected: "red",
    published: "purple",
  };

  return (
    <span style={{
      padding: "4px 8px",
      borderRadius: 6,
      color: "white",
      backgroundColor: colors[status] || "black",
      fontSize: 12
    }}>
      {status}
    </span>
  );
};

export default StatusBadge;
