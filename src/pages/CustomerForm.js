import React from "react";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Drawer,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CustomerForm = ({
  formTitle,
  btnLabel,
  open,
  onClose,
  newCustomerName,
  setNewCustomerName,
  newCustomerEmail,
  setNewCustomerEmail,
  onSubmit,
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ maxWidth: "80vw" }}
    >
      <Box sx={{ width: "80vw", padding: "20px" }}>
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "20px", fontSize: "24px" }}
        >
          {formTitle}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={newCustomerEmail}
              onChange={(e) => setNewCustomerEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} style={{ justifyContent: "end" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
              startIcon={btnLabel === "Save" ? null : <AddIcon />}
              sx={{ minWidth: "100px" }}
            >
              {btnLabel}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default CustomerForm;
