import React from "react";
import {Web3Provider} from "@web3-react/core";
// import your favorite web3 convenience library here

function getLibrary(provider, connector) {
  return new Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

export default function App() {
  return <Web3Provider getLibrary={getLibrary}>{/* <...> */}</Web3Provider>;
}
