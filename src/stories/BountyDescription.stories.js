import React from 'react';

import BountyDescription from '../containers/pure/BountyDescription';

export default {
  title: 'Example/BountyDescription',
  component: BountyDescription,
};

const Template = (args) => <BountyDescription {...args} />;

export const Primary = Template.bind({});
