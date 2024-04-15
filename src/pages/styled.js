import { styled } from "@mui/system";
import { CardContent, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Logo = styled("img")({
  height: "50px",
});

export const AnimatedCard = styled(motion.div)(({ theme }) => ({
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

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  background: "linear-gradient(to right, #4481eb, #04befe)",
  color: "#fff",
  borderRadius: "8px",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
}));

export const StyledIcon = styled("span")({
  marginRight: "8px",
});
