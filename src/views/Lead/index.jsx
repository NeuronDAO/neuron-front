import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Container from "@material-ui/core/Container";

import {withStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import List from "@material-ui/core/List";

import UserLine from "./Components/UserLine";

const Lead = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar isAutch={false} pTitle="Leader Board"></Navbar>

      <Container maxWidth="md">
        <TabContext value={value}>
          <AppBar position="static" color="transparent" className={classes.header}>
            <TabList
              onChange={handleChange}
              aria-label="Выбрать между ставками и комментариями"
              indicatorColor="primary"
              centered
            >
              {/* <Tab label="Top Earners" value="1" />
              <Tab label="Top Issuers" value="2" /> */}
              <StyledTab label="Top Earners" value="1" />
              <StyledTab label="Top Issuers" value="2" />
            </TabList>
          </AppBar>
          {/* ПАНЕЛЬ ЛУЧШИХ ПОЛЬЗОВАТЕЛЕЙ */}
          <TabPanel value="1" className={classes.panel}>
            <List className={classes.listAll}>
              {usersArr.map(({id, name, surName, hash, money}) => (
                <UserLine
                  key={id}
                  id={id}
                  name={name}
                  surName={surName}
                  cashEth={hash}
                  money={money}
                />
              ))}
            </List>
          </TabPanel>

          <TabPanel value="2" className={classes.panel}>
            <List className={classes.listAll}>
              {usersArr.map(({id, name, surName, hash, money}) => (
                <UserLine
                  key={id}
                  id={id}
                  name={name}
                  surName={surName}
                  cashEth={hash}
                  money={money}
                />
              ))}
            </List>
          </TabPanel>
        </TabContext>
      </Container>
    </>
  );
};

// LOC CSS
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: "20px auto",
  },
  header: {
    boxShadow: "none",
    marginTop: "20px",
  },
  panel: {
    padding: 0,
    margin: 0,
    marginTop: "20px",
  },
}));

// UPDATE COMPONENST Tab
const StyledTab = withStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

// WORK DUMP ARR
const usersArr = [
  {
    id: 1,
    name: "Sergey",
    surName: "Dolmatov",
    hash: "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    money: 110129.22,
  },
  {
    id: 2,
    name: "Olga",
    surName: "Lushina",
    hash: "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    money: 91020.1,
  },
  {
    id: 3,
    name: "Alexsander",
    surName: "Dante",
    hash: "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    money: 54827.91,
  },
  {
    id: 4,
    name: "Go ",
    surName: "Main Craft",
    hash: "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    money: 31007.21,
  },
  {
    id: 5,
    name: "Yulia",
    surName: "Senchiva",
    hash: "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    money: 19827.91,
  },
  {
    id: 6,
    name: "Andrey",
    surName: "Ermolov",
    hash: "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    money: 11812,
  },
];

export default Lead;
