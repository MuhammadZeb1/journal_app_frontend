import StatusBadge from "./StatusBadge";

const ManuscriptTable = ({ papers, actions }) => {
  return (
    <table border="1" width="100%" cellPadding="8">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Reviewer</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {papers.map((p) => (
          <tr key={p._id}>
            <td>{p.title}</td>
            <td><StatusBadge status={p.status} /></td>
            <td>{p.reviewer?.name || "-"}</td>
            <td>{actions(p)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManuscriptTable;
