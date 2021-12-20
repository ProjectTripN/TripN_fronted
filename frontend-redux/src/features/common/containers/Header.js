import * as React from "react";
import { Link, Box, AppBar, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const rightLink = {
  fontSize: 15,
  color: "common.black",
  ml: 6,
};

function Header() {
  return (
    <div>
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", margin: "40px" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h4"
            underline="none"
            color="common.black"
            component={RouterLink}
            to="/"
          >
            {"Trip N"}
          </Link>
          <Box sx={{ flex: 20, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/login"
              sx={rightLink}
            >
              {"LOGIN"}
            </Link>
            {/* {localStorage.length > 0 ? <></>
              : <Link to="/mypage" component={RouterLink}>UserAdd</Link>} */}
            <Link
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/join"
              sx={{ ...rightLink }}
            >
              {"JOIN"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/an/admin-login"
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

export default Header;
