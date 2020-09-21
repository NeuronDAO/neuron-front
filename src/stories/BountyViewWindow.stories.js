import React from 'react';

import BountyViewWindow from '../containers/pure/BountyViewWindow';

export default {
  title: 'Example/BountyViewWindow',
  component: BountyViewWindow,
};

const Template = (args) => <BountyViewWindow {...args} />;

export const Primary = Template.bind({});
