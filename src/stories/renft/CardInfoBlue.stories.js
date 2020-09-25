import React from "react";

import CardInfoBlue from "../../components/renft/Pages/History/CardInfoBlue.jsx";

export default {
  title: "Renft / Card Info",
  component: CardInfoBlue,
};

const Template = (args) => <CardInfoBlue {...args} />;

export const Blue = Template.bind({});

Blue.args = {
  name: "Name Cards",
  run: 100,
  procent: "23",
  type: "add",
};
