import React, { useState } from 'react';

const UserSearch = ({ currentUserId }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Replace with your API endpoint
    const res = await fetch(`/api/users/search?query=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by username..."
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>

      <ul className="mt-4 space-y-2">
        {results.map((user) => (
          <li key={user.id} className="border-b pb-2">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
