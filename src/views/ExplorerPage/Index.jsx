import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// Подключем Меню import NavBar
import Navbar from "../../components/NavBar/Navbar";
import Card from "./Components/Card";

function ExplorerPage() {
  const classes = useStyles();
  return (
    <>
      <Navbar isAutch={userInfo} pTitle="Explorer"></Navbar>
      <Container maxWidth="md" className={classes.root}>
        {/* Создаём много карточек */}
        {[...new Array(12)].map((item) => (
          <Card
            id="1" // NUM UNIC ID
            title="The Movement DAO - Social Change Engine - Adopt A Highway"
            // chipArr - пока что отключен
            desc={
              // Заполняем описание
              [...new Array(15)]
                .map(
                  () =>
                    "Тут описание проекта, по идеи сервер должен его обрезать. Но мы его страхуем "
                )
                .join("\n")
            }
            saleEth="110298110298.110298110298" // - Цена в ETH
            saleUsd="110298.12" // - Цена в USD
            difficulty="Beginner" // (JUST STRONG Beginner | OR TEXT)
            remaining="25 Years" // JUST STRONG
            expected="15" // JUST NUMBER (1-999)
            status={true}
          />
        ))}
      </Container>
    </>
  );
}

export default ExplorerPage;

//  Данные о пользователе
const userInfo = {
  name: "Sergey Dolmatov",
  email: "dolmatov.me@gmail.com", // Доступен только на странице PROFILE
  avatar: "/", // URL TO AVATAR
  cashbl: "0x09812098exzc102983109", // ETH CASH
};

// LOC CSS
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
}));
