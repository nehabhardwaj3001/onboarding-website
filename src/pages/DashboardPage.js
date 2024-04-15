import React, { useState } from "react";
import {
  Typography,
  Button,
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
import CustomerForm from "./CustomerForm";

const DashboardPage = () => {
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
    setNewCustomerName(customer.name);
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
      <CustomerForm
        formTitle="Add Customer"
        btnLabel="Add Customer"
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        newCustomerName={newCustomerName}
        setNewCustomerName={setNewCustomerName}
        newCustomerEmail={newCustomerEmail}
        setNewCustomerEmail={setNewCustomerEmail}
        onSubmit={handleAddCustomer}
      />
      <CustomerForm
        formTitle="Edit Customer"
        btnLabel="Save"
        open={showEditForm}
        onClose={() => setShowEditForm(false)}
        newCustomerName={newCustomerName}
        setNewCustomerName={setNewCustomerName}
        newCustomerEmail={newCustomerEmail}
        setNewCustomerEmail={setNewCustomerEmail}
        onSubmit={handleSaveEdit}
      />

      <Typography
        variant="h5"
        align="center"
        style={{ marginBottom: "20px", fontSize: "24px" }}
      >
        Customers
      </Typography>

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
    </div>
  );
};

export default DashboardPage;
