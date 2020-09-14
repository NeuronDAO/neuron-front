import React from "react";

import BountyCard from "../containers/pure/BountyCard";

export default {
  title: "Example/BountyCard",
  component: BountyCard,
};

const Template = (args) => <BountyCard {...args} />;

export const Primary = Template.bind({});
