import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

/**
 * [Здесь создаётся центр плоской карточки. Просто передаём сюда название карты и значение]
 *
 * @param {String} name [Название карточки]
 * @param {Number} run [Значение карточки]
 */
const CardContent = ({name, run}) => {
  const classes = useStyles();

  return (
    <div className={classes.cont}>
      {/* ISER NAME CARD */}
      <Typography noWrap align="left" variant="subtitle2" className={classes.name}>
        {name}
      </Typography>
      {/*  USER RUN TYPE */}
      <Typography noWrap align="left" className={classes.desc}>
        {run}
      </Typography>
    </div>
  );
};

export default CardContent;

// LOC CSS
const useStyles = makeStyles((theme) => ({
  cont: {padding: theme.spacing(0.2, 1)},
  name: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.secondary,
  },
  desc: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 700,
  },
}));
