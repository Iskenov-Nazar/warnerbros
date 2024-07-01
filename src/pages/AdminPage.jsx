import { Button } from "@mui/material";
import React, { useState } from "react";
import AddMovie from "../components/products/AddMovie";
import AddCategory from "../components/products/AddCategory";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Add Category</Button>
      <AddMovie />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
