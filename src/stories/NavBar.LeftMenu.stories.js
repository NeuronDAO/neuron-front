import React from "react";
import {MemoryRouter} from "react-router";

import LeftMenu from "../components/NavBar/LeftMenu";

export default {
  title: "Example/LeftMenu",
  component: LeftMenu,
};

const Template = (args) => (
  <MemoryRouter>
    <LeftMenu {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
