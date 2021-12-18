// import React from "react";
// import { Box, Tab } from "@mui/material";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import JoinTab1 from "./Join_personal";
// import JoinTab2 from "./Join_company";

// export default function JoinTab() {
//   const [value, setValue] = React.useState("1");
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
//       <TabContext value={value}>
//         <TabList onChange={handleChange} aria-label="lab API tabs example">
//           <Tab label="개인" value="1" />
//         </TabList>
//         <TabPanel value="1">
//           {" "}
//           <JoinTab1 />{" "}
//         </TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
