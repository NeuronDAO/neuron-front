import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import Input from "../../../components/LockComp/MeInput";
import TextArea from "../../../components/LockComp/MeTextArea";

/**
 * Формируем блок редактирования информации о себе
 * Данные можно перебрасывать в пропсах, но я думал что мы
 * будем тянуть их из стейта, по этому тут пропсов нет
 */
export default function ControlledAccordions() {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="edit-about">
        <Typography className={classes.heading}>Edit About</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.centerItem}>
        <form className={classes.form}>
          <Input
            id="name"
            place="Enter your name"
            label="Name"
            value="Sergey Dolmatov"
            full={true}
          />

          <Input
            id="email"
            place="username@domain.com"
            label="Email"
            value="Dolmatov.me@gmail.com"
            full={true}
          />

          <TextArea
            id="about-me"
            place="Enter about me..."
            label="About me"
            value="I developers fron this page "
            full={true}
          />

          <Button variant="outlined">Update</Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

//  LOC CSS
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },

  centerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexFlow: "wrap row",
  },
  form: {
    textAlign: "center",
    maxWidth: "380px",
    width: "100%",
  },
}));
