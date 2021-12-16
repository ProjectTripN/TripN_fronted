import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar } from "features/adminCommon";

const rightLink = {
  fontSize: 15,
  color: "common.white",
  ml: 6,
};

export default function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between", bgcolor: "#3c495e" }}>
          <Box sx={{ flex: 1 }} />
          <Link variant="h5" underline="none" color="inherit" href="/home">
            {"Trip N Admin"}
          </Link>
          <Box sx={{ flex: 20, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {"LOGIN"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/join"
              sx={{ ...rightLink }}
            >
              {"JOIN"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/an/admin-login"
              sx={{ ...rightLink }}
            >
              {"ADMIN"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
