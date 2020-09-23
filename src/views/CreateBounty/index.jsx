import React from "react";
import Navbar from "../../components/NavBar";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Divider, Button} from "@material-ui/core";

import Input from "../../components/LockComp/MeInput";
import TextArea from "../../components/LockComp/MeTextArea";

// import     from './Components/TextArea';
import HelpTooltip from "./Components/HelpTooltip";
import ChipSelect from "./Components/SelectCategory";
import JustSelect from "./Components/SelectJust";
import DatePicker from "./Components/DatePicker";
import PayInpt from "./Components/PayInputNew";
import TextInfo from "./Components/TextInfo";

import "sanitize.css";

/**
 * Формируем страницу создания новых объвлений
 * Страница статичная так что почти не получает пропсов
 */
const LeadPage = ({isAuth}) => {
  //  USE CSS
  const classes = useStyles();

  return (
    <>
      <Navbar isAuth={isAuth} pTitle="Create Bounty"></Navbar>

      <Container maxWidth="md" className={classes.root}>
        <Paper className={classes.all}>
          <TextInfo
            header="Enter your details about this bounty."
            text="Enter a title and description for your bounty. A markdown preview will automatically be generated
                     as you type, which you can view by clicking the preview button. Choose a description template below to get started,
                     or clear the field to create your own."
          />

          <form>
            <div className={classes.controlWidt}>
              <Input full={true} label="Title" id="title" place="Enter title..." />
              <HelpTooltip
                header="Task title"
                text="Please provide a thoughtful title. This will help users evaluate the task and make administration easier for you."
              />
            </div>

            <div className={classes.controlWidt}>
              <TextArea
                full={true}
                label="Description"
                id="desc"
                place="Enter description..."
              />
              <HelpTooltip
                header="Description of the task"
                text="Create your description responsibly. This will help users estimate the scope of the task."
              />
            </div>

            <TextInfo
              header="How should this bounty be classified?"
              text="Enter the categories and difficulty level for the bounty. Since difficulty
                     can be fairly subjective, it is helpful to provide more details around required experience within your bounty 
                     description."
            />

            {/* MULIT SELECT CAT */}

            <div className={classes.controlWidt}>
              <ChipSelect />
              <HelpTooltip
                header="Select one or more categories"
                text="Categories indicate what type of assignment your task belongs to. Please select one or more suitable options"
              />
            </div>

            {/* BEGINER SELECT CAT */}
            <div className={classes.controlWidt}>
              <JustSelect />
            </div>

            <TextInfo
              header="When will this bounty be due?"
              text="Enter the date and time for this bounty's deadline (timezone=Europe/Moscow)"
            />

            {/* DATAPICKER  */}
            <div className={classes.controlWidt}>
              <DatePicker />
            </div>

            <TextInfo
              header="Select payout method and amount."
              text="Select the token and enter the amount you will award for completion of this bounty."
            />

            {/* Pay input */}
            <PayInpt ETH="1293.1029" DAI="0.00000123" OCEAN="13" />

            <Divider />

            <Button variant="outlined" className={classes.btnFly}>
              Create
            </Button>
            <Button variant="text" className={classes.btnFly}>
              Cancel
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

//  LOCALE CSS
const useStyles = makeStyles((theme) => ({
  root: {flexGrow: 1, margin: "20px auto"},
  all: {
    padding: "14px",
  },
  text: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  controlWidt: {
    maxWidth: "420px",
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    margin: theme.spacing(1, 0),
  },
  fly: {
    marginBottom: "25px",
  },
  btnFly: {
    marginTop: "15px",
    marginRight: "10px",
  },
}));

export default LeadPage;
