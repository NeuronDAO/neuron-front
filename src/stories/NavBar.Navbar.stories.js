import React from "react";
import {MemoryRouter} from "react-router";

import Navbar from "../components/NavBar";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const Template = (args) => (
  <MemoryRouter>
    <Navbar {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
