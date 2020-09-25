import React from "react";

import CardGrapic from "../../components/renft/Pages/History/CardGrapic.jsx";

export default {
  title: "Renft / Card Grapic",
  component: CardGrapic,
};

const Template = (args) => <CardGrapic {...args} />;

export const Oneline = Template.bind({});

Oneline.args = {
  id: "string_id",
  name: "Name Cards",
  color: "#f54b42",
  start_run: 100,
};
