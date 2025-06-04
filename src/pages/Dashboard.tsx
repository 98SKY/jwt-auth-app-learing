import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome, <strong>{user.role}</strong>!</p>
          {/* <p>Email: {user.}</p> */}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Dashboard;
