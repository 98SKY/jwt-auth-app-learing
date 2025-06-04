import React from "react";
import { Container, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const DashboardContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.role}!
      </Typography>
      <Typography>
        This is your beautifully crafted, responsive, and secure dashboard.
      </Typography>
    </Container>
  );
};

export default DashboardContent;
