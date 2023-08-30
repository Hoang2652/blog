import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import dataCar from '@/data/searchCar.js';
import AutoComplete from "@/components/input/autocomplete";
import List from "@/components/input/list";
import SliderComponent from '@/components/input/slider';

function index() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return ( 
        <Box sx={{ mt: 2 }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="KEYWORD" value="1" sx={{ fontWeight: 700,}}/>
                            <Tab label="MAKE/MODEL" value="2" sx={{ fontWeight: 700,}}/>
                            <Tab label="PRICE" value="3" sx={{ fontWeight: 700,}}/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ padding: '10px 0' }}>
                        <AutoComplete options={dataCar} />
                    </TabPanel>
                    <TabPanel value="2" sx={{ padding: '10px 0' }}>
                        <List options={dataCar} />
                    </TabPanel>
                    <TabPanel value="3" sx={{ padding: '10px 0' }}>
                        <SliderComponent />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
     );
}

export default index;