import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";
import CenteredMessage from "./component/common/CenteredMessage";

// Protect private routes
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <CenteredMessage message=" redirecting"/>;
  return user ? children : <Navigate to="/login" replace />;
};

const App: React.FC = () => {

  const AuthRedirect: React.FC = () => {
    const { user, loading } = useAuth();
  
    if (loading) return <CenteredMessage message="Checking authentication..." />;
    return user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
  };
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<AuthRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
