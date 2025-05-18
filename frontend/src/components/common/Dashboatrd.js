import os

# Define dashboard layout with sidebar and summary cards
dashboard_structure = {
    "src/pages/DashboardPage.jsx": '''import React from "react";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";

const DashboardPage = () => {
  const stats = [
    { label: "Total Posts", value: 12 },
    { label: "Learning Plans", value: 3 },
    { label: "Progress Updates", value: 8 },
    { label: "Followers", value: 21 }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <SummaryCard key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
''',
    "src/components/Sidebar.jsx": '''import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold mb-6">SkillShare</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/progress" className="hover:text-blue-600">Progress</Link>
        <Link to="/learning-plans" className="hover:text-blue-600">Learning Plans</Link>
        <Link to="/profile" className="hover:text-blue-600">Profile</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
''',
    "src/components/SummaryCard.jsx": '''import React from "react";

const SummaryCard = ({ label, value }) => {
  return (
    <div className="bg-white rounded shadow p-4 text-center">
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default SummaryCard;
'''
}

# Define base path
base_path = "/mnt/data/react_dashboard"

# Create file structure
for path, content in dashboard_structure.items():
    full_path = os.path.join(base_path, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w") as f:
        f.write(content)

base_path
