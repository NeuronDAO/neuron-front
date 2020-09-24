import React from "react";

import Cards from "../../components/renft/Cards.jsx";

import OverView from "../../components/renft/Pages/Overview/Index.jsx";
import RenTable from "../../components/renft/Pages/Rentable/Index.jsx";
import History from "../../components/renft/Pages/History/Index.jsx";

/**
 * ЭТО ИСКЛЮЧИЕЛЬНО ДЕМО СТРАНИЦА!!
 * НЕ НАДО ЮЗАТЬ ЕЁ КАК ГОТОВЫЙ КОМПОНЕНТ!
 */

export default {
  title: "Renft / Card Area",
  component: Cards,
};

const Template = (args) => <Cards {...args} />;

export const Exmaple = Template.bind({});
export const Overview = Template.bind({});
export const Rentable = Template.bind({});
export const Hystorypage = Template.bind({});

Exmaple.args = {
  title: "Название карточки",
  cont: "Пример карточки",
  slider: true,
};

Overview.args = {
  title: "NFT Name Overwiev",
  cont: <OverView />,
  slider: true,
};

Rentable.args = {
  title: "Current Rentable",
  cont: <RenTable />,
  slider: true,
};

Hystorypage.args = {
  title: "Your History",
  cont: <History />,
  slider: true,
};
