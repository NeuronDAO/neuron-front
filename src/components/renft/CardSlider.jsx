import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import IconLeft from "@material-ui/icons/ArrowBackIos";
import IconRight from "@material-ui/icons/ArrowForwardIos";

/**
 * [Я не очень понял как работает этот компонент. По сути это переключатель,
 * но что и как он переключает я не понял :с ]
 */
export default function CardsHeader() {
  const classes = useStyles();

  return (
    <div className={classes.area}>
      <IconButton variant="outlined" className={classes.btn} size="small">
        <IconLeft className={classes.icon} />
      </IconButton>

      <IconButton variant="outlined" className={classes.btn} size="small">
        <IconRight className={classes.icon} />
      </IconButton>
    </div>
  );
}

//  USE CSS AND MIN STYLE
const useStyles = makeStyles((theme) => ({
  btn: {
    padding: theme.spacing(2, 2),
    marginLeft: theme.spacing(2),
  },
  icon: {
    fontSize: theme.typography.pxToRem(14),
  },
  area: {
    position: "relative",
    top: "20px",
    textAlign: "end",
  },
}));
