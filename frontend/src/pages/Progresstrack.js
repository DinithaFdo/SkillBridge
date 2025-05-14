import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProgressPage() {
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const response = await axios.get("/api/v1/progress");
      setProgressList(response.data);
    } catch (error) {
      console.error("Failed to load progress:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/progress/${id}`);
      setProgressList(progressList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📈 Learning Progress</h2>

      {loading ? (
        <p>Loading progress...</p>
      ) : progressList.length === 0 ? (
        <p className="text-gray-600">No progress updates yet.</p>
      ) : (
        <ul className="space-y-4">
          {progressList.map((progress) => (
            <li
              key={progress.id}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{progress.title}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(progress.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{progress.description}</p>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  className="text-sm px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                  onClick={() => alert("Edit functionality coming soon")}
                >
                  Edit
                </button>
                <button
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(progress.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
