import React from "react";

import LeftMenu from "../components/NavBar/LeftMenu";

export default {
  title: "Example/LeftMenu",
  component: LeftMenu,
};

const Template = (args) => <LeftMenu {...args} />;

export const Default = Template.bind({});
