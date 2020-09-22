import React from "react";
import {Link} from "react-router";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import UserLinkAll from "./UserLinksAll";

/**
 * [Формируем раскрывающийся блок информации о пользователи.
 * Внимание, все данные, кроме Avatar - объязательны]
 *
 * @param {Array} props [Массив данных полученый от родителя]
 * @param {String} props.name [Имя пользователя] *
 * @param {String} props.avatar [Аватарка пользователя] *
 * @param {String} props.cash [ETH кошелёк пользователя] *
 * @param {String} props.about [Информация об о мне]
 * @param {String} props.link [Ссылка на пользователя внутри проекта] *
 *
 * @return {React Components} [Возвращает цельный компонент (Аккаурдеон) с минимальным набором информации о пользователе]
 */
export default function UserInfo(props) {
  const classes = useStyles();
  console.log(props);

  // Контролируем введенную сумму
  function controlLenght(x) {
    x = x.length > 10 ? x.substr(0, 5) + "..." + x.substr(x.length - 5, 5) : x;
    return x;
  }
  return (
    <Accordion className={classes.root}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <List className={classes.listAll}>
          <ListItem alignItems="flex-start" className={classes.listAll}>
            <ListItemAvatar>
              <Avatar alt={props.name} src={props.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={props.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component={Link}
                    variant="subtitle2"
                    className={classes.hash}
                    to={props.link}
                  >
                    {controlLenght(props.cash)}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </AccordionSummary>
      <AccordionDetails className={classes.accDop}>
        <Typography gutterBottom>{props.about}</Typography>

        <UserLinkAll chips={props.links.args.chips} />
      </AccordionDetails>
    </Accordion>
  );
}

// LOC CSS
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "20px 0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  listAll: {
    margin: 0,
    padding: 0,
  },
  hash: {
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.text.secondary,
  },
  accDop: {
    display: "Block",
    width: "100%",
  },
}));
