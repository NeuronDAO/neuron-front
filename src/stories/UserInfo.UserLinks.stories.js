import React from "react";

import UserLinks from "../components/UserInfo/UserLinks";

export default {
  title: "Example/UserLinks",
  component: UserLinks,
};

const Template = (args) => <UserLinks {...args} />;

export const Default = Template.bind({});
