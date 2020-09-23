import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Navbar from "../../components/NavBar";
import Card from "./Components/Card";

import "sanitize.css";

const Explorer = ({userInfo, bounties}) => {
  const classes = useStyles();

  return (
    <>
      <Navbar isAuth={userInfo} title="Explorer" />
      <Container maxWidth="md" className={classes.root}>
        {bounties.map((i) => (
          <Card
            id={i.id}
            title={i.title}
            desc={i.desc}
            saleEth={i.rewardInTokens}
            saleUsd={i.rewardInUsd}
            difficulty={i.difficulty}
            remaining={i.remainingTime}
            status={i.isActive}
          />
        ))}
        {/* {[...new Array(5)].map((item) => (
          <Card
            id="1"
            title="The Movement DAO - Social Change Engine - Adopt A Highway"
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
            difficulty="Beginner"
            remaining="25 Years"
            expected="15"
            status={true}
          />
        ))} */}
      </Container>
    </>
  );
};

//  Данные о пользователе
const userInfo = {
  name: "User's name",
  email: "users@email.com", // Доступен только на странице PROFILE
  avatar: "/", // URL TO AVATAR
  cashbl: "0x0000000000000000000000000000000000000000", // ETH CASH
};
const bounties = [
  {
    id: "1",
    title: "Collect the L1 ETH/USD orderbook data on Coinbase",
    desc:
      "Here is the Coinbase API that I would like you to use, please. It is worth writing this in Go, please",
    rewardInTokens: "10",
    rewardInUsd: "$ 4000",
    difficulty: "Beginner",
    remainingTime: "1 month",
    isActive: true,
  },
  {
    id: "2",
    title: "Collect the L2 GBP/EUR orderbook data",
    desc:
      "To be fed into the MetaTrader, so would be great to have the data formatted for that purpose. Thank you",
    rewardInTokens: "10",
    rewardInUsd: "$ 10000",
    difficulty: "Advanced",
    remainingTime: "3 months",
    isActive: true,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "20px",
  },
}));

Explorer.defaultProps = {
  userInfo,
  bounties,
};

export default Explorer;
