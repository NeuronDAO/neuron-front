import React from "react";
import {Link} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import IconFile from "@material-ui/icons/Link";
import {Button} from "@material-ui/core";

/**
 * [Обрабатываем полученные о пользователе данные и выводим их в блок комментариев или ставки]
 *
 * @param {Array} props [Массив данных полученый от родиелей]
 * @param {String} props.text [Текст комметария или ставки]
 * @param {String} props.link [Ссылки указанаая в ставке]
 * @param {String} props.uName [Имя пользователя, оставившего коментарий]
 * @param {String} props.uLink [Ссылка на пользователя в нашем проекте]
 *
 */
export default function UserInfo(props) {
  const classes = useStyles(),
    userGo = props.uLink ? props.uLink : false;

  // Если мы получили ссылку - то выводим информацию о ней
  function controlLine(str) {
    var locLink = "";

    if (str.length === 0) {
      return "";
    } else if (str.length >= 70) {
      locLink = str.substr(0, 10) + "..." + str.substr(str.length - 10, 10);
    } else {
      locLink = str;
    }

    return (
      <Chip
        className={classes.link}
        component="a"
        href={str}
        icon={<IconFile />}
        label={locLink}
        variant="outlined"
      />
    );
  } // End Control Line

  // В этом блоке мы гененрируем текст ставки, если он есть
  function generationtext(str) {
    return (
      <Typography paragraph component="span" display="block" className={classes.text}>
        {" "}
        {str}{" "}
      </Typography>
    );
  }

  return (
    <List>
      <ListItem alignItems="flex-start" className={classes.listAll}>
        <ListItemAvatar>
          <Avatar alt={props.uName} src="/" />
        </ListItemAvatar>
        <ListItemText
          // Ссылка на аккаунт пользователя + вывод его имени
          primary={
            <Button component={Link} to={userGo}>
              {" "}
              {props.uName}{" "}
            </Button>
          }
          secondary={
            <React.Fragment>
              {/* Текст, если пользователь указал комментарий  */}
              {generationtext(props.text)}
              {/* Если есть ссылка, то она появится здесь */}
              {controlLine(props.link)}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {width: "100%", margin: "20px 0"},
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  listAll: {margin: 0, padding: 0},
  link: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    margin: "0 0 20px 0",
  },
  item: {
    borderTop: "1px solid red",
  },
}));
