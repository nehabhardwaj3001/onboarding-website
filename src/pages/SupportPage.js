import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Styled Paper component with custom styles
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

// Styled Typography component with custom styles
const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

// Styled Grid container with custom styles
const StyledGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
}));

// Styled Icon component with custom styles
const StyledIcon = styled('span')({
  marginRight: '8px',
});

function Support() {
  return (
    <Container maxWidth="md" style={{ margin: '40px auto' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ color: '#4CAF50' }}>
        Need Help? We're Here For You!
      </Typography>
      <Typography variant="body1" paragraph style={{ marginBottom: '20px', textAlign: 'center', color: '#757575' }}>
        Our dedicated support team is ready to assist you. Feel free to reach out to us for any questions or concerns.
      </Typography>
      <Typography variant="h6" gutterBottom style={{ color: '#2196F3', marginBottom: '20px' }}>
        Contact Information
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTypography variant="subtitle1" gutterBottom style={{ color: '#4CAF50' }}>
              Customer Support
            </StyledTypography>
            <StyledTypography variant="body2" paragraph style={{ color: '#616161' }}>
              For general inquiries or assistance, please contact our customer support team:
            </StyledTypography>
            <StyledGrid container>
              <StyledIcon><EmailIcon /></StyledIcon>
              <StyledTypography variant="body2" style={{ color: '#424242' }}>
                support@example.com
              </StyledTypography>
            </StyledGrid>
            <StyledGrid container>
              <StyledIcon><PhoneIcon /></StyledIcon>
              <StyledTypography variant="body2" style={{ color: '#424242' }}>
                +1 (123) 456-7890
              </StyledTypography>
            </StyledGrid>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <StyledTypography variant="subtitle1" gutterBottom style={{ color: '#2196F3' }}>
              Technical Support
            </StyledTypography>
            <StyledTypography variant="body2" paragraph style={{ color: '#616161' }}>
              For technical issues or troubleshooting, please reach out to our technical support team:
            </StyledTypography>
            <StyledGrid container>
              <StyledIcon><EmailIcon /></StyledIcon>
              <StyledTypography variant="body2" style={{ color: '#424242' }}>
                techsupport@example.com
              </StyledTypography>
            </StyledGrid>
            <StyledGrid container>
              <StyledIcon><PhoneIcon /></StyledIcon>
              <StyledTypography variant="body2" style={{ color: '#424242' }}>
                +1 (123) 789-0123
              </StyledTypography>
            </StyledGrid>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Support;
