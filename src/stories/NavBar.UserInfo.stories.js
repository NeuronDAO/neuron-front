import React from "react";
import {MemoryRouter} from "react-router";

import UserInfo from "../components/NavBar/UserInfo";

export default {
  title: "Example/UserInfo",
  component: UserInfo,
};

const Template = (args) => (
  <MemoryRouter>
    <UserInfo {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
