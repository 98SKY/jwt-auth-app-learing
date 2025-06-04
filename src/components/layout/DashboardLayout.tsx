import React from "react";
import { Box, CssBaseline, Toolbar, useTheme } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar drawerWidth={drawerWidth} />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
