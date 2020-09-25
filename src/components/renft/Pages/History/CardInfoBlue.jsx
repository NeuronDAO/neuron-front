import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

//  DEF ICON
import IconFull from "@material-ui/icons/Fullscreen";

// Процент сбоку
import CardProcent from "./CardProcent";
// Контент
import CardContent from "./CardContent";

/**
 * [К сожлаению мне не удалось достичь качественного изменения цвета в карточке
 * По этому я просто её размножил( Извини)]
 *
 * @param {String} name [Название карточки - передаётся дальше в CardContent]
 * @param {Number} run  [Значение карточки - передаётся дальше в CardContent]
 * @param {Number} procent [На сколько процентов изменилось значение  - передаётся дальше в CardSale]
 * @param {String} type [Тип изменения процента (plus | minus) ]
 */
const CardInfoBlue = ({name, run, procent, type}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Box className={`${classes.iconArea} ${classes.green}`}>
        <IconFull className={classes.icon} />
      </Box>

      {/* USE CARD CONTENT */}
      <CardContent name={name} run={run} />

      {/* USE PROCENT  */}
      <CardProcent procent={procent} type={type} />
    </Paper>
  );
};

export default CardInfoBlue;

//  LOC CSS
const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 1),
    padding: theme.spacing(1.2, 1),
    maxWidth: 260,
    width: "100%",
    display: "inline-flex",
    position: "relative",
    overflow: "hidden",
  },
  iconArea: {
    minWidth: "48px",
    height: "48px",
    margin: theme.spacing(0.2),
    borderRadius: "7px",
    display: "flex",
    backgroundColor: "#DAFAF8",
    color: "#0180FF",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "35px",
    height: "35px",
  },
}));
