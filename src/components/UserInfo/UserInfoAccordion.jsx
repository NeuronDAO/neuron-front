import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
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

import IconTelega from "@material-ui/icons/Telegram";
import IconSite from "@material-ui/icons/Language";
import IconTwitter from "@material-ui/icons/Twitter";
import IconGithub from "@material-ui/icons/GitHub";
import IconLinked from "@material-ui/icons/LinkedIn";

import UserLinksAll from "./UserLinksAll";

//  * @param {String} props.link [Ссылка на пользователя внутри проекта] *
/**
 * [Формируем раскрывающийся блок информации о пользователи.
 * Внимание, все данные, кроме Avatar - объязательны]
 *
 * @param {Array} props [Массив данных полученый от родителя]
 * @param userInfo includes name and avatar
 * {String} name [Имя пользователя] *
 * {String} avatar [Аватарка пользователя] *
 * @param {String} ethAddress [ETH кошелёк пользователя] *
 * @param {String} about [Информация об о мне]
 *
 * @return {React Components} [Возвращает цельный компонент (Аккаурдеон) с минимальным набором информации о пользователе]
 */
const UserInfoAccordion = ({userInfo, ethAddress, about, linksChips}) => {
  const classes = useStyles();

  // Контролируем введенную сумму
  function controlLength(x) {
    if (!x) {
      return "";
    }
    return x.length > 10 ? x.substr(0, 5) + "..." + x.substr(x.length - 5, 5) : x;
  }

  return (
    <Accordion className={classes.root}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <List className={classes.listAll}>
          <ListItem alignItems="flex-start" className={classes.listAll}>
            <ListItemAvatar>
              <Avatar alt={userInfo.name} src={userInfo.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={userInfo.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component={Link}
                    variant="subtitle2"
                    className={classes.hash}
                    // to={link}
                  >
                    {controlLength(ethAddress)}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </AccordionSummary>
      <AccordionDetails className={classes.accDop}>
        <Typography gutterBottom>{about}</Typography>

        <UserLinksAll chips={linksChips} />
      </AccordionDetails>
    </Accordion>
  );
};

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

UserInfoAccordion.propTypes = {
  userInfo: PropTypes.object,
  ethAddress: PropTypes.string,
  about: PropTypes.string,
  linksChips: PropTypes.arrayOf(PropTypes.object),
};
UserInfoAccordion.defaultProps = {
  userInfo: {
    name: "Me",
    avatar: "https://klike.net/uploads/posts/2019-07/1564314090_3.jpg",
  },
  ethAddress: "0x0000000000000000000000000000000000000000",
  about: "This is some description about me",
  linksChips: [
    {label: "Telegram", link: "https://t.me/user", icon: <IconTelega />},
    {label: "WebSite", link: "https://mywebsite.com", icon: <IconSite />},
    {label: "Twiter", link: "", icon: <IconTwitter />},
    {label: "GitHub", link: "", icon: <IconGithub />},
    {label: "Linked", link: "", icon: <IconLinked />},
  ],
};
export default UserInfoAccordion;
