import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import UserLink from "./UserLink";
/**
 * [Формируем список ссылок, указанных пользователем]
 *
 * @param {Array} props [Список ссылок в массиве]
 *
 * Функция нуждается в переработке, исходя из полученного массива.
 * Лучше будет писать обработки в цикле (там же расставлять иконки и ссылки),
 * чем пытаться писать обработчик вот так, костылём
 */
export default function MiddleDividers(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider variant="fullWidth" />
      {props.chips.map((chip) => (
        <UserLink key={chip.label} label={chip.label} link={chip.link} icon={chip.icon} />
      ))}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
