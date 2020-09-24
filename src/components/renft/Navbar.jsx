import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "./Button";

/**
 * [Генерируем универсальное верхнее меню, в котором при необходимости мы сможем управлять статусом]
 *
 * @param {Array} props [Массив с данными]
 * @param {String} props.buttonsList [Массив с кнопками, если ничего не передать, ничего не выведет)]
 * @param {String} props.label [Текст кнопки, так же является ключом для массива]
 * @param {String} props.variant [Тип кнопки (одно из трех описаных в компоненте значений)]
 */

export default function BasicNavBar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.app} position="static" color="transparent">
      <Container size="lg">
        <Toolbar disableGutters={true}>
          <Typography variant="body1" className={classes.title}>
            reNFT
          </Typography>
          {props.buttonsList.map((btn) => (
            <Button key={btn.label} label={btn.label} variant={btn.variant} />
          ))}
        </Toolbar>

        <Divider />
      </Container>
    </AppBar>
  );
}

//  LOC STYLE
const useStyles = makeStyles((theme) => ({
  app: {boxShadow: "none"},
  // LOGO STyLE
  title: {
    flexGrow: 1,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 700,
  },
}));
