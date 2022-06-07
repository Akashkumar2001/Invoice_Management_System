import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  DialogActions,
  Grid,
  Typography,
} from "@mui/material";

function AnalyticsView({openAnalyticsView, setOpenAnalyticsView}) {
  const style = {
    marginLeft: 2,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: "white",
    borderRadius: "5px",
  };

  const buttonStyle = { width: "50%", color: "white", borderColor: "white" };
  return (
    <div>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={openAnalyticsView}
        maxWidth="xl"
      >
        <DialogTitle
          id="customized-dialog-title"
          sx={{ backgroundColor: "#263238", color: "white" }}
        >
          Analytics View
        </DialogTitle>

        <DialogContent dividers sx={{ backgroundColor: "#263238" }}>
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ m: 2, display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ color: "white" }}>Clear Date</Typography>
                <TextField
                  name="clearDate"
                  type="date"
                  sx={{ ...style, width: "13em" }}
                />

                <TextField
                  name="clearDate"
                  type="date"
                  sx={{ ...style, width: "13em" }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{ m: 2, display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ color: "white" }}>Due Date</Typography>
                <TextField
                  name="clearDate"
                  type="date"
                  sx={{ ...style, width: "13em" }}
                />

                <TextField
                  name="clearDate"
                  type="date"
                  sx={{ ...style, width: "13em" }}
                />
              </Grid>
            </Grid>

            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ m: 2, display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ color: "white" }}>
                  Baseline Create Date
                </Typography>
                <TextField
                  name="clearDate"
                  type="date"
                  sx={{ ...style, width: "13em" }}
                />

                <TextField
                  name="clearDate"
                  type="date"
                  sx={{ ...style, width: "13em" }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{ m: 2, display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ color: "white" }}>
                  Invoice Currency
                </Typography>
                <TextField
                  name="clearDate"
                  placeholder="Invoice Currency"
                  sx={{ ...style, width: "13em" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#263238" }}>
          <Button variant="outlined" sx={{ ...buttonStyle }}>
            Submit
          </Button>

          <Button
            variant="outlined"
            sx={{ ...buttonStyle }}
            onClick={() => {
              setOpenAnalyticsView(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AnalyticsView;
