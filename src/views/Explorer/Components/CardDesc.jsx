import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/**
 * В этой файле мы прорабатываем длинну описания (если вдруг сервер выплёвывает необрезанную строку)
 * В общем не большая страховка, чтобы верстка выгледела локонично
 *
 * @param {Array} props [Массив данных принимаемых от родителя]
 * @param {String} props.desc [Строка описания, которую мы обрезаем ]
 * @returns {React Components} [Возвращаем обрезанное описание]
 */
export default function Desc(props) {
  const classes = useStyles();

  // Обрезаем длинную строку, если она длинна
  const desc = props.desc.length > 290 ? props.desc.substr(0, 285) + "..." : props.desc;

  return (
    <Typography display="block" variant="body2" className={classes.root}>
      {desc}
    </Typography>
  );
}

//  CSS STYLE
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(14),
    marginBottom: "10px",
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));
