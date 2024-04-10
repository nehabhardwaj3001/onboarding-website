import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { HelpOutline } from "@mui/icons-material";

// Styled component for the logo
const Logo = styled("img")({
  height: "50px",
});

function Header() {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Navigate to desired page after logout
    navigate("/");
  };

  // Check if email, password, and role are stored in local storage
  const isLoggedIn =
    localStorage.getItem("email") &&
    localStorage.getItem("password") &&
    localStorage.getItem("role");

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          "@media (max-width: 600px)": {
            padding: "10px 15px",
          },
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            "@media (max-width: 600px)": {
              gap: "5px",
            },
          }}
        >
          <Logo src="/images/logo.png" alt="company-logo" />
          <Typography
            variant="h6"
            sx={{ textDecoration: "none", color: "#deb11d" }}
          >
            arthdigital
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <Button color="inherit" variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                variant="outlined"
                component={Link}
                to="/login"
                sx={{
                  "@media (max-width: 600px)": {
                    padding: "5px 10px",
                  },
                }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                component={Link}
                to="/register"
                sx={{
                  "@media (max-width: 600px)": {
                    padding: "5px 10px",
                  },
                }}
              >
                Register
              </Button>
            </>
          )}
          <IconButton
            color="inherit"
            component={Link}
            to="/support"
            sx={{
              "@media (max-width: 600px)": {
                padding: "0",
              },
            }}
          >
            <HelpOutline />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
