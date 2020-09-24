import React from "react";

import List from "../../components/renft/Pages/Overview/ListItem.jsx";

/**
 * ЭТО ИСКЛЮЧИЕЛЬНО ДЕМО СТРАНИЦА!!
 * НЕ НАДО ЮЗАТЬ ЕЁ КАК ГОТОВЫЙ КОМПОНЕНТ!
 */

export default {
  title: "Renft / Card List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Exmaple = Template.bind({});

Exmaple.args = {
  title: "Название списка",
  text: "Текст списка",
};
