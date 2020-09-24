import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

/**
 * В этой файле мы прорабатываем длинну описания (если вдруг сервер выплёвывает необрезанную строку)
 * В общем не большая страховка, чтобы верстка выгледела локонично
 *
 * @param {String} desc [Строка описания, которую мы обрезаем ]
 */
const Desc = ({desc}) => {
  const classes = useStyles();

  return (
    <Typography display="block" variant="body2" className={classes.root}>
      {desc ? (desc.length > 290 ? desc.substr(0, 285) + "..." : desc) : ""}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(14),
    marginBottom: "10px",
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

Desc.propTypes = {
  desc: PropTypes.string,
};
Desc.defaultProps = {
  desc: "some description",
};
export default Desc;
