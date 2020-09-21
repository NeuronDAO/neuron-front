import React from "react";

import Navbar from "../components/NavBar/Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
