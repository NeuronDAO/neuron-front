import React from "react";
import {MemoryRouter} from "react-router";

import UserInfoAccordion from "../components/UserInfo/UserInfoAccordion";

export default {
  title: "Example/UserInfoAccordion",
  component: UserInfoAccordion,
};

const Template = (args) => (
  <MemoryRouter>
    <UserInfoAccordion {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
