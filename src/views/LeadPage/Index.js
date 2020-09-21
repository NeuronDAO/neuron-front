import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import Container from '@material-ui/core/Container';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import UserTable from './Components/LeadList';


/**
 * Формируем список лидеров. Тут всё просто данные передаются в компонент (UserTabel)
 * Там данные разираются в компоненты. 
 */
export default function LeadPage () {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
    <>
      <Navbar isAutch={false} pTitle="Leader Board"></Navbar> 
      
      <Container maxWidth="md" >
        <TabContext value={value} >
            <AppBar position="static" className={classes.app} color="transparent">
            <TabList onChange={handleChange}>
                <Tab label="Top Earners" value="1" />
                <Tab label="Top Issuers" value="2" />
            </TabList>
            </AppBar>
            <TabPanel value="1" className={classes.panel}>                
                <UserTable />
            </TabPanel>
            <TabPanel value="2" className={classes.panel}>
                <UserTable />
            </TabPanel>
        </TabContext>
      </Container>
    </>
    );
}

// LOC CSS
const useStyles = makeStyles(() => ({

    panel: {
        padding: 0,
        margin: 0,
    },
    app: {
        marginTop: 20,
        backgroundColor: '#fff',
        boxShadow: 'none', 
    }
}));

