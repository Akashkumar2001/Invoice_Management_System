// import React from 'react';
// import Typography from '@mui/material/Typography';
// import { Link } from '@mui/material';
// import { Box } from '@mui/system';

// const style={
//   display:"flex",
//   bgcolor:"#37474f",
//   justifyContent: 'center',
//   alignItems:'center',
//   height: 80,
  
// }

// function Footer() {
//   return (
//     <Box sx={{...style}}>
//         <Link href="#" color="#35baf6">Privacy Policy</Link><Typography variant="caption" display="block" gutterBottom color="white" >
//          | © 2022 HighRadius Corporation. All rights reserved.
//       </Typography>
  
//   </Box>
//   )
// }

// export default Footer;
import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Box } from '@mui/system';

// const style={
//   display:"flex",
//   bgcolor:"#455a64",
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: 80
// }

function Footer() {
  return (
    <Box sx={{ bgcolor: "#34444c" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12vh",
        }}
      >
        <Link href="https://www.highradius.com/privacy-policy/" target="_blank"sx={{ marginTop:'-10px',marginRight:'10px',color:"#35baf6"}}>
          Privacy Policy
        </Link>
        <Typography
          sx={{ textAlign: "center" }}
          variant="caption"
          display="block"
          gutterBottom
          color="white"
          fontSize="13px"
        >
          | © 2022 HighRadius Corporation. All rights reserved.
        </Typography>
      </div>
    </Box>
  );
}
export default Footer;