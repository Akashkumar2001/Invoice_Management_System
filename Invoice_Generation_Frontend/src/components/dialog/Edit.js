import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";

function Edit({
  openEdit,
  handleCloseEdit,
  currency,
  payment_term,
  changeCheckedData,
}) {
  const style = { m: 2, backgroundColor: "white", borderRadius: "5px" };

  return (
    <Dialog open={openEdit} onClose={handleCloseEdit}>
      <DialogTitle sx={{ backgroundColor: "#263238", color: "white" }}>
        EDIT
      </DialogTitle>
      <DialogContent sx={{ display: "flex", backgroundColor: "#263238" }}>

        <TextField
          autoFocus
          id="currency"
          label="Invoice Currency"
          type="text"
          value={currency}
          variant="standard"
          sx={{ ...style }}
          name="currency"
          onChange={changeCheckedData}
        ></TextField> 

        <TextField
          autoFocus
          id="payment_term"
          label="Customer Payment Terms"
          type="text"
          variant="standard"
          sx={{ ...style }}
          value={payment_term}
          name="payment_term"
          onChange={changeCheckedData}
        ></TextField>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#263238" }}>
        <Button
          variant="outlined"
          sx={{ width: "50%", color: "white", borderColor: "white" }}
          onClick={() => handleCloseEdit(true)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "50%", color: "white", borderColor: "white" }}
          onClick={() => handleCloseEdit(false)}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Edit;
