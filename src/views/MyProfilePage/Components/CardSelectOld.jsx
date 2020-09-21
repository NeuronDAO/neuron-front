import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import RsList from './RsList';


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(3),
    },
    demo1: {
      backgroundColor: theme.palette.background.paper,
      padding: '8px 12px'
    },    
    tabName: {margin: 0},
    tabBadge: {fontWeight: 700,}, 
    
  }));
  
  export default function CustomizedTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
         <Typography variant="h6" paragraph>My Bounties</Typography>

          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab value={0} label={<p className={classes.tabName}>Active: <span className={classes.tabBadge}>3</span></p>} />
            <AntTab value={1} label={<p className={classes.tabName}>Draft: <span className={classes.tabBadge}>11</span></p>} />
          </AntTabs>

            <TabPanel value={value} index={0}>
                <RsList 
                  
                id="1" // NUM UNIC ID
            
                title="The Movement DAO - Social Change Engine - Adopt A Highway"

                saleEth="0.0001" // - Цена в ETH
                saleUsd="110298.12" // - Цена в USD 
                difficulty="Beginner" // (JUST STRONG Beginner | OR TEXT)
                remaining="25 Years" // JUST STRONG 
                expected="15" // JUST NUMBER (1-999)
                />
                

            </TabPanel>
            <TabPanel value={value} index={1}>
                Page Two
            </TabPanel>
          
      </div>
    );
  }


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
              {children}
          </Box>
        )}
      </div>
    );
  }

  const AntTabs = withStyles({
    indicator: {backgroundColor: 'inherit',},})(Tabs);
  
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(2),
      height: '25px',
      '&:hover': {
        color: theme.palette.text.primary,
        opacity: 1,
      },
      '&$selected': {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor: theme.palette.action.selected,
        borderRadius: '5px',
      },
      '&:focus': {color: theme.palette.text.primary,},
      '&p' : {margin: 0,}
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);
  
  
  
  
  
  