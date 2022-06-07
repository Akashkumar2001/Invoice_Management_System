import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  Typography,
} from "@mui/material";
import React from "react";

function Delete({ openDelete, handleCloseDelete, submitDelete }) {
  return (
    <Dialog open={openDelete} onClose={handleCloseDelete}>
      <DialogTitle sx={{ backgroundColor: "#263238", color: "white" }}>
        Delete Records?
      </DialogTitle>
      <DialogContent sx={{ display: "flex", backgroundColor: "#263238" }}>
        <Typography color="white">
          Are you sure you want to delete these record[s]?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#263238" }}>
        <Button
          variant="outlined"
          sx={{ width: "50%", color: "white", borderColor: "white" }}
          onClick={submitDelete}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "50%", color: "white", borderColor: "white" }}
          onClick={handleCloseDelete}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default Delete;
