import React from 'react';

// ! TODO: nado chtobu komponentu nazuvalis' kak i sam faijl. To jest' zamenit' CardDop na CardInfo
import CardInfo from '../components/LocCards/CardInfo';

export default {
  title: 'Example/CardInfo',
  component: CardInfo,
};

const Template = (args) => <CardInfo {...args} />;

export const Default = Template.bind({});
