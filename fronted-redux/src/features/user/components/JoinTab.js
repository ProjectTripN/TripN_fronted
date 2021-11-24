import React from 'react';
import { Box,  Tab} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import JoinTab1 from './JoinTab1';
import JoinTab2 from './JoinTab2';

  


export default function JoinTab() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="개인" value="1" />
            <Tab label="기업" value="2" />
        </TabList>
        <TabPanel value="1">
          <JoinTab1/>
        </TabPanel>
        <TabPanel value="2">
            <JoinTab2/>
        </TabPanel>
        </TabContext>
        </Box>
    );
}
