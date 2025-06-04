import React from "react";
import { Typography, Container } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography>
        This is the settings page. You can put user preferences and options here.
      </Typography>
    </Container>
  );
};

export default Settings;
