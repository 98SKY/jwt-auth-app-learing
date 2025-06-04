import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface CenteredMessageProps {
  message: string;
}

const CenteredMessage: React.FC<CenteredMessageProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      bgcolor="#f9f9f9"
      padding={2}
    >
      <Paper elevation={3} sx={{ padding: { xs: 2, sm: 4 }, maxWidth: 400, width: "100%" }}>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.primary"
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
        >
          {message}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CenteredMessage;
