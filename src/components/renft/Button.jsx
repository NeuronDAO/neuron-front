import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

/**
 * [Локальная настраиваемая кнопка]
 *
 * @param {Array} props [Массив с данными]
 * @param {String} props.variant [Один из 3 вариантов вида кнопки (contained - залитый, outlined - бордер, text - def  просто как текст)]
 * @param {String} props.label [Текст в кнопке]
 */

export default function ButtonMe(props) {
  const classes = useStyles();

  return (
    <Button variant={props.variant} size="medium" className={classes.btnStyle}>
      {props.label}
    </Button>
  );
}

//  LOC STYLE
const useStyles = makeStyles((theme) => ({
  btnStyle: {marginRight: "5px"},
}));
