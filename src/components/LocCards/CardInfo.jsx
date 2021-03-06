import React from "react";
import PropTypes from "prop-types";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import IconDif from "@material-ui/icons/TrackChangesOutlined";
import IconRem from "@material-ui/icons/UpdateOutlined";
import IconExp from "@material-ui/icons/KeyboardReturnOutlined";
import IconState from "@material-ui/icons/RadioButtonCheckedOutlined";

import "sanitize.css";

/**
 * [Эта функция генерирует микроразметку описания преокта. По сути мы просто принимаем
 * Один из разрешенных типов параметров]
 *
 * @param {Array} props [Массив данных принимаемый от родителя]
 * @param {Bool}   props.status [TRUE | FALSE - показывает является ли проект активным]
 * @param {String} props.dif [Difficulty - строковое значения уровня сложности ДОЛЖНО БЫТЬ 1 из 3 (Beginner | Intermediate | Expert)]
 * @param {String} props.rem [Remaining - Сколько ещё времени будет активным этот проект ]
 * @param {Number} props.exp [Expected - Количество ставок JUST NUMBER]
 * @returns {React Components} [На выходе получаем чистую строку со статусом проекта, временем исполнения и количеством ставок]
 */
const CardInfo = ({isActive, difficulty, timeRemaining, numberExpressedInterest}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LightTooltip
        title={isActive ? "The project is available" : "The project has been completed."}
        arrow
      >
        <Typography variant="overline" className={classes.allLine}>
          <IconState className={classes.icon} />
          <Hidden only={["xs", "sm"]}>
            <span className={classes.nameState}>Status</span> :
          </Hidden>
          <span className={classes.state}>{isActive ? "Active" : "Completed"}</span>
        </Typography>
      </LightTooltip>

      <LightTooltip title="Level of difficulty" arrow>
        <Typography variant="overline" className={classes.allLine}>
          <IconDif className={classes.icon} />
          <Hidden only={["xs", "sm"]}>
            <span className={classes.nameState}>Difficulty</span> :
          </Hidden>
          <span className={classes.state}>{difficulty}</span>
        </Typography>
      </LightTooltip>

      <LightTooltip title="Time to complete the task" arrow>
        <Typography variant="overline" className={classes.allLine}>
          <IconRem className={classes.icon} />
          <Hidden only={["xs", "sm"]}>
            <span className={classes.nameState}>Remaining</span> :
          </Hidden>
          <span className={classes.state}>{timeRemaining}</span>
        </Typography>
      </LightTooltip>

      <LightTooltip title="Number of revisions" arrow>
        <Typography variant="overline" className={classes.allLine}>
          <IconExp className={classes.icon} />
          <Hidden only={["xs", "sm"]}>
            <span className={classes.nameState}>Expressed interest</span> :
          </Hidden>
          <span className={classes.state}>{numberExpressedInterest} interested</span>
        </Typography>
      </LightTooltip>
    </div>
  );
};

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(14),
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "inline-flex",
    marginBottom: "10px",
  },
  state: {
    fontSize: theme.typography.pxToRem(11),
    fontWeight: 700,
  },
  nameState: {
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.text.secondary,
  },
  icon: {
    width: "15px",
    fill: "#999",
    marginRight: "3px",
  },
  allLine: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
}));

CardInfo.propTypes = {
  isActive: PropTypes.bool,
  difficulty: PropTypes.oneOf(["beginner", "intermediate", "advanced"]),
  timeRemaining: PropTypes.string,
  numberExpressedInterest: PropTypes.number,
};
CardInfo.defaultProps = {
  isActive: true,
  difficulty: "advanced",
  timeRemaining: "1 month",
  numberExpressedInterest: 0,
};

export default CardInfo;
