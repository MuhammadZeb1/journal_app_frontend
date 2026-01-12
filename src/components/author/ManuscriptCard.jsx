import axios from 'axios'; // Import your axios instance or standard axios
 const ManuscriptCard = ({ manuscript, onDelete, onEdit }) => {
  
  const handleViewFile = async () => {
    try {
      // Use your auth token from localStorage
      const token = localStorage.getItem('token'); 

      const response = await axios.get(
        `http://localhost:5000/api/author/manuscripts/${manuscript._id}/file`,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'blob', // Critical for handling PDF/Images/Files
        }
      );

      // Create a temporary URL for the file blob
      const file = new Blob([response.data], { type: manuscript.contentType });
      const fileURL = URL.createObjectURL(file);

      // Open the file in a new tab
      window.open(fileURL, '_blank');

      // Clean up the URL after a few seconds
      setTimeout(() => URL.revokeObjectURL(fileURL), 5000);
    } catch (error) {
      console.error("Error opening file:", error);
      alert("Unauthorized: Please log in again.");
    }
  };

  return (
    <div className="border p-4 rounded flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h3 className="font-semibold text-lg">{manuscript.title}</h3>
        {/* ... existing code ... */}
      </div>

      <div className="flex space-x-2 mt-2 md:mt-0">
        {/* Changed from <a> to <button> for authenticated request */}
        <button
          onClick={handleViewFile}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          View
        </button>

        {manuscript.status === "pending" && (
          <>
            <button onClick={() => onEdit(manuscript)} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
            <button onClick={() => onDelete(manuscript._id)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ManuscriptCard;