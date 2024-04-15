import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import { AnimatedCard, CardContentStyled } from "./styled";

const demoText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.";

const cardName = ["About Us", "Services", "Contact Us"];

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Arth Digital
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cardName?.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <AnimatedCard whileHover={{ scale: 1.05 }}>
              <CardContentStyled>
                <Typography variant="h6" gutterBottom>
                  {card}
                </Typography>
                <Typography variant="body1">{demoText}</Typography>
              </CardContentStyled>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
