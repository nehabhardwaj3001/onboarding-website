import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

// Styled component for the card with motion animation
const AnimatedCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

// Styled component for the card content
const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  background: "linear-gradient(to right, #4481eb, #04befe)",
  color: "#fff",
  borderRadius: "8px",
}));

function HomePage() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Arth Digital
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <AnimatedCard whileHover={{ scale: 1.05 }}>
            <CardContentStyled>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi.
              </Typography>
            </CardContentStyled>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard whileHover={{ scale: 1.05 }}>
            <CardContentStyled>
              <Typography variant="h6" gutterBottom>
                Services
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi.
              </Typography>
            </CardContentStyled>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard whileHover={{ scale: 1.05 }}>
            <CardContentStyled>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi.
              </Typography>
            </CardContentStyled>
          </AnimatedCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
