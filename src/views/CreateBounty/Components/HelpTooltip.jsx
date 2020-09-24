import React from "react";
import PropTypes from "prop-types";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import IconQuest from "@material-ui/icons/HelpOutline";

import "sanitize.css";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  mrLeft: {
    marginLeft: "15px",
  },
  header: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: "700",
  },
  text: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

const HelpTooltip = ({header, text}) => {
  const classes = useStyles();
  return (
    <div>
      <LightTooltip
        className={classes.mrLeft}
        title={
          <>
            <Typography className={classes.header}>{header}</Typography>
            <Typography className={classes.text}>{text}</Typography>
          </>
        }
      >
        <IconButton>
          <IconQuest />
        </IconButton>
      </LightTooltip>
    </div>
  );
};

HelpTooltip.propTypes = {
  header: PropTypes.stirng,
  text: PropTypes.string,
};
HelpTooltip.defaultProps = {
  header: "header",
  text: "text",
};
export default HelpTooltip;
