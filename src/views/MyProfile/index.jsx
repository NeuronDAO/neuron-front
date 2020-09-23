import React from "react";
import Navbar from "../../components/NavBar";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

import UserInfoAccordion from "../../components/UserInfo/UserInfoAccordion";
import CardSelect from "./Components/CardSelect";

import "sanitize.css";

const useStyles = makeStyles(() => ({
  root: {flexGrow: 1, margin: "20px auto"},
  out: {marginTop: "20px"},
}));

export default function LeadPage() {
  const classes = useStyles();

  return (
    <>
      <Navbar isAutch={false} pTitle="My Dashboard"></Navbar>
      <Container maxWidth="md" className={classes.root}>
        <UserInfoAccordion
          name="Sergey Dolmatov"
          avatar="/"
          cash="random cash"
          about="Information about me"
        />

        <CardSelect header="My Bounties" tabs={tabsBountes} />

        <CardSelect header="Submissions" tabs={tabsSubmission} />
      </Container>
    </>
  );
}

function createData(id, name, value, run) {
  return {id, name, value, run};
}

const tabsBountes = [createData(1, "Acrive", "1", 12), createData(2, "Draft", "2", 39)];

const tabsSubmission = [
  createData(3, "Received", "1", 11),
  createData(4, "Submitted", "2", 44),
];
