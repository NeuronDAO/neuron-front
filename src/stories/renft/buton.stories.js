import React from "react";

import Button from "../../components/renft/Button.jsx";

export default {
  title: "Renft / Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Outline = Template.bind({});
export const Full = Template.bind({});

Outline.args = {
  label: "defult link",
  variant: "outlined",
};

Full.args = {
  label: "defult link",
  variant: "contained",
};
