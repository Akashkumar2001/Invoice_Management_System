import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  Grid,
} from "@mui/material";

function AdvanceSearch({
  search_doc_id,
  search_cust_name,
  search_invoice_id,
  search_business_year,
  openAdvanceSearch,
  setOpenAdvanceSearch,
  handleCloseAdvanceSearch,
  changeAdvanceSearchHandler
}) {
  const style = { m: 2, backgroundColor: "white", borderRadius: "5px" };

  return (
    <Dialog open={openAdvanceSearch}>
      <DialogTitle sx={{ backgroundColor: "#263238", color: "white" }}>
        Advance Search
      </DialogTitle>
      <DialogContent sx={{ display: "flex", backgroundColor: "#263238" }}>
        <Grid>
          <TextField
            variant="outlined"
            placeholder="Document Id"
            name="search_doc_id"
            value={search_doc_id}
            onChange={changeAdvanceSearchHandler}
            sx={{ ...style }}
          ></TextField>

          <TextField
            placeholder="Invoice Id"
            name="search_invoice_id"
            value={search_invoice_id}
            onChange={changeAdvanceSearchHandler}
            sx={{ ...style }}
          ></TextField>
        </Grid>

        <Grid>
          <TextField
            placeholder="Customer Number"
            name="search_cust_name"
            value={search_cust_name}
            onChange={changeAdvanceSearchHandler}
            sx={{ ...style }}
          ></TextField>

          <TextField
            placeholder="Business Year"
            name="search_business_year"
            value={search_business_year}
            onChange={changeAdvanceSearchHandler}
            sx={{ ...style }}
          ></TextField>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#263238" }}>
        <Button
          variant="outlined"
          sx={{ width: "50%", color: "white", borderColor: "white" }}
          onClick={handleCloseAdvanceSearch}
        >
          Search
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "50%", color: "white", borderColor: "white" }}
          onClick={() => setOpenAdvanceSearch(false)}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdvanceSearch;
