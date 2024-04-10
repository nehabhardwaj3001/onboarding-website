import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Drawer,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { ToastContainer } from "react-toastify";

function DashboardPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com" },
  ]);

  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerEmail, setNewCustomerEmail] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);

  const handleAddCustomer = () => {
    if (newCustomerName && newCustomerEmail) {
      const newCustomer = {
        id: customers.length + 1,
        name: newCustomerName,
        email: newCustomerEmail,
      };
      setCustomers([...customers, newCustomer]);
      setNewCustomerName("");
      setNewCustomerEmail("");
      setShowAddForm(false);
      toast.success("Customer added successfully.");
    } else {
      toast.error("Please provide both name and email.");
    }
  };

  const handleDeleteCustomer = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );
    setCustomers(updatedCustomers);
    toast.success("Customer deleted successfully.");
  };

  const handleEditCustomer = (customer) => {
    setEditCustomer(customer);
    setNewCustomerName(customer.name); // Populate the input fields with the customer data
    setNewCustomerEmail(customer.email);
    setShowEditForm(true);
  };

  const handleSaveEdit = () => {
    if (newCustomerName && newCustomerEmail) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === editCustomer.id
          ? { ...customer, name: newCustomerName, email: newCustomerEmail }
          : customer
      );
      setCustomers(updatedCustomers);
      setShowEditForm(false);
      setNewCustomerName("");
      setNewCustomerEmail("");
      setEditCustomer(null);
      toast.success("Customer updated successfully.");
    } else {
      toast.error("Please provide both name and email.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Add Customer Form Drawer */}
      <Drawer
        anchor="right"
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        sx={{ maxWidth: "80vw" }}
      >
        <Box sx={{ width: "80vw", padding: "20px" }}>
          <Typography
            variant="h5"
            align="center"
            style={{ marginBottom: "20px", fontSize: "24px" }}
          >
            Add Customer
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
                onClick={handleAddCustomer}
                startIcon={<AddIcon />}
                sx={{ minWidth: "100px" }}
              >
                Add Customer
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>

      {/* Edit Customer Form Drawer */}
      <Drawer
        anchor="right"
        open={showEditForm}
        onClose={() => setShowEditForm(false)}
        sx={{ maxWidth: "80vw" }}
      >
        <Box sx={{ width: "80vw", padding: "20px" }}>
          <Typography
            variant="h5"
            align="center"
            style={{ marginBottom: "20px", fontSize: "24px" }}
          >
            Edit Customer
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
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveEdit}
                sx={{ minWidth: "100px" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>

      <Typography
        variant="h5"
        align="center"
        style={{ marginBottom: "20px", fontSize: "24px" }}
      >
        Customers
      </Typography>

      {/* Show Add Customer Form Button */}
      {!showAddForm && (
        <Box display="flex" justifyContent="end" marginBottom="20px">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAddForm(true)}
            startIcon={<AddIcon />}
            sx={{ minWidth: "150px" }}
          >
            Add Customer
          </Button>
        </Box>
      )}

      {/* Customer List */}
      <Box>
        <List>
          {customers.map((customer) => (
            <Paper key={customer.id} style={{ marginBottom: "10px" }}>
              <ListItem>
                <ListItemText
                  primary={customer.name}
                  secondary={customer.email}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => handleDeleteCustomer(customer.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleEditCustomer(customer)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Box>

      {/* Toast Container for displaying success/error messages */}
    </div>
  );
}

export default DashboardPage;
