import React from "react";

import CardHeader from "../../components/renft/CardHeader.jsx";

export default {
  title: "Renft / Card Header",
  component: CardHeader,
};

const Template = (args) => <CardHeader {...args} />;

export const Header = Template.bind({});

Header.args = {
  title: "Название карточки",
};
