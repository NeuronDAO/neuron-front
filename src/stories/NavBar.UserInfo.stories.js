import React from "react";

import UserInfo from "../components/NavBar/UserInfo";

export default {
  title: "Example/UserInfo",
  component: UserInfo,
};

const Template = (args) => <UserInfo {...args} />;

export const Default = Template.bind({});
