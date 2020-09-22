import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import Input from "../../../components/LockComp/MeInput";

/**
 * Формируем блок редактирования информации о социальных ссылках пользователя
 * Данные можно перебрасывать в пропсах, но я думал что мы
 * будем тянуть их из стейта, по этому тут пропсов нет
 */
export default function ControlledAccordions() {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="edit-about">
        <Typography className={classes.heading}>Edit Soical</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.centerItem}>
        <form className={classes.form}>
          <Input
            id="website"
            place="https://example.com"
            label="Personal website"
            value=""
            full={true}
          />

          <Input id="twitter" place="@userName" label="Twitter" value="" full={true} />

          <Input id="github" place="@dolmatov" label="Github" value="" full={true} />

          <Input
            id="linkedIn"
            place="https://linkedin.com/in/[YOUR_NAME]"
            label="LinkedIn"
            value=""
            full={true}
          />

          <Input
            id="telegram"
            place="@dolmatov_s"
            label="Telegram"
            value=""
            full={true}
          />

          <Button variant="outlined">Update</Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

// ДЩС СЫЫ
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
