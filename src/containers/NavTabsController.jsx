import React, {useContext, useEffect, useState} from "react";
import Box from "@material-ui/core/Box";

// ! OTHER INTERNAL DEPENDENCIES
import NavTabs from "./pure/NavTabs";
import Web3Context from "../contexts/Web3Context";
// import RegisterController from "../components/RegisterModalController";

import "sanitize.css";

const NavTabsController = () => {
  const {web3, isSetting, error} = useContext(Web3Context);
  const [currNetwork, setCurrNetwork] = useState(null);

  useEffect(() => {
    if (web3 !== null && error === null && !isSetting) {
      web3.eth.net.getId().then((id) => {
        setCurrNetwork(id);
      });
    }
  }, [web3, isSetting, error]);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <NavTabs handleLogin={handleLogin} currentNetwork={currNetwork} />
      {/* <RegisterController /> */}
    </Box>
  );
};

export default NavTabsController;
