import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Navbar from "../../components/NavBar";
import Card from "./Components/Card";
// Модуль информации о создателе объъявления
import UserInfoAccordion from "../../components/UserInfo/UserInfoAccordion";
import TabsDown from "./Components/Tabs";

import IconTelega from "@material-ui/icons/Telegram";
import IconSite from "@material-ui/icons/Language";
import IconTwitter from "@material-ui/icons/Twitter";
import IconGithub from "@material-ui/icons/GitHub";
import IconLinked from "@material-ui/icons/LinkedIn";

import "sanitize.css";

/**
 * Здесь мы собираем стрницу просмотра задачи
 *
 * Мы отдельно получаем инфомрацию о пользвоателе, создавшем этот проект (UserInfoAccordion)
 *
 * Отдельно получаем информацию о самой задаче (Cards)
 *
 * И отдельно получаем информацию о ставках и комментариях (TabsDown)
 */
const ExplorerView = ({userInfo, ethAddress, about, linksChips, card}) => {
  const classes = useStyles();

  return (
    <>
      <Navbar isAuth={false} title="Bounties" />
      <Container maxWidth="md" className={classes.root}>
        <UserInfoAccordion
          userInfo={userInfo}
          ethAddress={ethAddress}
          about={about}
          linksChips={linksChips}
        />
        <Card {...card} />
        <TabsDown />
      </Container>
    </>
  );
};

const useStyles = makeStyles(() => ({
  root: {marginTop: "20px"},
  infoCard: {padding: "12px 16px"},
}));

ExplorerView.propTypes = {
  userInfo: PropTypes.object,
  ethAddress: PropTypes.string,
  about: PropTypes.string,
  linksChips: PropTypes.arrayOf(PropTypes.object),
  card: PropTypes.object,
};
ExplorerView.defaultProps = {
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
  card: {
    title: "Bounty title",
    desc: "Bounty description, extended text",
    isActive: true,
    difficulty: "beginner",
    timeRemaining: "1 month",
    numberExpressedInterest: "17",
    tags: [{id: 1, name: "Python"}],
  },
};

export default ExplorerView;
