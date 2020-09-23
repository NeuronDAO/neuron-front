import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Navbar from "../../components/NavBar";
import Card from "./Components/Card";

import "sanitize.css";

const Explorer = ({userInfo, bounties}) => {
  const classes = useStyles();

  return (
    <>
      <Navbar userInfo={userInfo} title="Explorer" />
      <Container maxWidth="md" className={classes.root}>
        {bounties.map((i) => (
          <Card
            key={i.id}
            id={i.id}
            title={i.title}
            rewardInTokens={i.rewardInTokens}
            rewardInUsd={i.rewardInUsd}
            isActive={i.isActive}
            difficulty={i.difficulty}
            timeRemaining={i.remainingTime}
            numberExpressedInterest={i.numberExpressedInterest}
            desc={i.desc}
            goToProjectPath={i.goToProjectPath}
            chipArr={i.chipArr}
          />
        ))}
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
    rewardInTokens: "10",
    rewardInUsd: "$ 4000",
    difficulty: "Beginner",
    timeRemaining: "1 month",
    numberExpressedInterest: 6,
    isActive: true,
    desc:
      "Here is the Coinbase API that I would like you to use, please. It is worth writing this in Go, please",
    goToProjectPath: "/explorer/view",
    chipArr: [
      {id: 1, name: "C++"},
      {id: 2, name: "Rust"},
    ],
  },
  {
    id: "2",
    title: "Collect the L2 GBP/EUR orderbook data",
    rewardInTokens: "10",
    rewardInUsd: "$ 10000",
    difficulty: "Advanced",
    timeRemaining: "3 months",
    numberExpressedInterest: 12,
    isActive: true,
    desc:
      "To be fed into the MetaTrader, so would be great to have the data formatted for that purpose. Thank you",
    goToProjectPath: "/explorer/view",
    chipArr: [{id: 1, name: "Python"}],
  },
];

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "20px",
  },
}));

Explorer.propTypes = {
  userInfo: PropTypes.object,
  bounties: PropTypes.arrayOf(PropTypes.object),
};
Explorer.defaultProps = {
  userInfo,
  bounties,
};

export default Explorer;
