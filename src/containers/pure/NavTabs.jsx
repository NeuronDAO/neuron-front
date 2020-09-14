import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";

import NetworkIndicator from "@rimble/network-indicator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const NavTabs = ({ handleLogin, currentNetwork }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Box
          display="flex"
          flexDirection="row"
          flexBasis={1}
          justifyContent="space-between"
        >
          <Box alignSelf="flex-end">
            <Tab component="a" label="Home" href="/" />
            <Tab component="a" label="Collect Data" href="/collect-data" />
            <Tab component="a" label="FAQ" href="/faq" />
          </Box>
          <Box alignSelf="flex-end">
            <Toolbar>
              <NetworkIndicator currentNetwork={currentNetwork} />
              <IconButton
                // aria-label="show 4 new mails"
                color="inherit"
              ></IconButton>
              <IconButton
                // aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleLogin}
              >
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

NavTabs.propTypes = {
  handleLogin: PropTypes.func,
  currentNetwork: PropTypes.number,
};

NavTabs.defaultProps = {
  handleLogin: (e) => e.preventDefault(),
  currentNetwork: null,
};

export default NavTabs;
