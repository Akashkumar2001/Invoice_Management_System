import * as React from "react";
import Box from "@mui/material/Box";
import logo from "./assets/g1.png";
import comp from "./assets/logo.svg";

const style = {
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 95,
  },
  backgroundColor: "#34444c",
};

function Header() {
  return (
    <div style={{ width: "100vw" }}>
      <Box sx={{ ...style }}>
        <img src={logo} alt="logo1"style={{ position: "absolute",left: "0", marginLeft:30, marginTop:15, maxWidth:"230px" }} />
        <img src={comp} alt="logo2" style={{marginTop:15,maxWidth:"220px"}}/>
      </Box>
    </div>
  );
}
export default Header;
