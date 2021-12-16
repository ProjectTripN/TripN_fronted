import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Paper from "@mui/material/Paper";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Voucher</h1>
      <Box component={Paper} sx={{ width: "100%", typography: "body1" }}>
        <TabContext sx={{ minWidth: 700 }} value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Flight" value="1" />
              <Tab label="Accomodation" value="2" />
              <Tab label="Activity" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"> 비행기 티켓 자리입니당 </TabPanel>
          <TabPanel value="2"> 숙소 자리입니당 </TabPanel>
          <TabPanel value="3"> 엑비티비 자리입니당 </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
