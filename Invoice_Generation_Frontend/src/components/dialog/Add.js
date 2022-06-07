import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  DialogActions,
} from "@mui/material";

export default function Add({
  business_code,
  code,
  clear_date,
  year,
  doc_id,
  posting_date,
  create_date,
  due_date,
  add_currency,
  doc_type,
  posting_id,
  tot_amount,
  baseline_date,
  add_payment_term,
  invoice_id,
  changeHandler,
  submitHandler,
  openAdd,
  setOpenAdd,
  resetHandler,
}) {
  const style = { m: 2, backgroundColor: "white", borderRadius: "5px" };
  const buttonStyle = { width: "50%", color: "white", borderColor: "white" };

  return (
    <div>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={openAdd}
        maxWidth="xl"
      >
        <DialogTitle
          id="customized-dialog-title"
          sx={{ backgroundColor: "#263238", color: "white" }}
        >
          Add
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: "#263238" }}>
          <Grid display="flex">
            <Grid>
              <TextField
                onChange={changeHandler}
                name="business_code"
                value={business_code}
                placeholder="Business Code"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="code"
                value={code}
                placeholder="Customer Number"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="clear_date"
                value={clear_date}
                type="date"
                sx={{ ...style, width: "13em" }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="year"
                value={year}
                placeholder="Business Year"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
          </Grid>

          <Grid display="flex">
            <Grid>
              <TextField
                onChange={changeHandler}
                name="doc_id"
                value={doc_id}
                placeholder="Document Id"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="posting_date"
                value={posting_date}
                type="date"
                variant="outlined"
                sx={{ ...style, width: "13em" }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="create_date"
                value={create_date}
                type="date"
                variant="outlined"
                sx={{ ...style, width: "13em" }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="due_date"
                value={due_date}
                type="date"
                variant="outlined"
                sx={{ ...style, width: "13em" }}
              />
            </Grid>
          </Grid>

          <Grid display="flex">
            <Grid>
              <TextField
                onChange={changeHandler}
                name="add_currency"
                value={add_currency}
                placeholder="Invoice Currency"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="doc_type"
                value={doc_type}
                placeholder="Document Type"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="posting_id"
                value={posting_id}
                placeholder="Posting Id"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="tot_amount"
                value={tot_amount}
                placeholder="Total Open Account"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
          </Grid>

          <Grid display="flex" sx={{ width: "100%" }}>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="baseline_date"
                value={baseline_date}
                type="date"
                variant="outlined"
                sx={{ ...style, width: "13em" }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="add_payment_term"
                value={add_payment_term}
                placeholder="Customer Payment Terms"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
            <Grid>
              <TextField
                onChange={changeHandler}
                name="invoice_id"
                value={invoice_id}
                placeholder="Invoice Id"
                variant="outlined"
                sx={{ ...style }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#263238" }}>
          <Button
            variant="outlined"
            sx={{ ...buttonStyle }}
            onClick={submitHandler}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            sx={{ ...buttonStyle }}
            onClick={resetHandler}
          >
            Reset
          </Button>
          <Button variant="outlined" sx={{ ...buttonStyle }} onClick={() => setOpenAdd(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
