import React from "react";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

        </List>
        <Divider />
        {user && (
          <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
              {user.role[0].toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="subtitle1">{user.role}</Typography>
              <Typography variant="caption" color="text.secondary">
                ID: {user.sub}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
