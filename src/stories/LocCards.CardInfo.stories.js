import React from "react";

import CardInfo from "../components/LocCards/CardInfo";

export default {
  title: "Example/CardInfo",
  component: CardInfo,
};

const Template = (args) => <CardInfo {...args} />;

export const Default = Template.bind({});
