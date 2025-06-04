import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Tooltip,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAuth } from "../../context/AuthContext";
import { useThemeContext } from "../../context/ThemeContext";

interface TopbarProps {
  drawerWidth: number;
}

const Topbar: React.FC<TopbarProps> = ({ drawerWidth }) => {
  const { logout } = useAuth();
  const { toggleColorMode, mode } = useThemeContext();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <DashboardIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Awesome Dashboard
        </Typography>

        <Tooltip title="Toggle light/dark theme">
          <IconButton color="inherit" onClick={toggleColorMode}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton color="inherit">
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
