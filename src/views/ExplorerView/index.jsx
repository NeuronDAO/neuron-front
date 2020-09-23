import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Navbar from "../../components/NavBar";
import Card from "./Components/Card";
// Модуль информации о создателе объъявления
import UserInfoAccordion from "../../components/UserInfo/UserInfoAccordion";
import TabsDown from "./Components/Tabs";

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
const ExplorerView = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar isAuth={false} title="Bounties" />
      <Container maxWidth="md" className={classes.root}>
        <UserInfoAccordion
          name="User's name"
          about="User information here"
          avatar="/"
          cash="0x0000000000000000000000000000000000000000"
        />

        <Card title="Project short description" desc="Full description text here" />

        <TabsDown />
      </Container>
    </>
  );
};

const useStyles = makeStyles(() => ({
  root: {marginTop: "20px"},
  infoCard: {padding: "12px 16px"},
}));

export default ExplorerView;
