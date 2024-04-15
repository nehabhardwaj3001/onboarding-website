import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { Logo } from "../pages/styled";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

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
          onClick={() => navigate("/")}
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
                onClick={() => navigate("/login")}
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
                onClick={() => navigate("/register")}
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
            onClick={() => navigate("/support")}
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
};

export default Header;
