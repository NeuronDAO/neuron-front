import React from "react";

import NavBar from "../../components/renft/Navbar.jsx";

import * as Button from "./Buton.stories";

export default {
  title: "Renft / Navbar",
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
export const Example = Template.bind({});

Default.args = {
  buttonsList: [],
};

Example.args = {
  buttonsList: [
    {...Button.Full.args, id: 1, label: "List nft"},
    {...Button.Outline.args, id: 1, label: "Connect"},
  ],
};
