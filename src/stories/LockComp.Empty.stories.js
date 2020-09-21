import React from "react";

import Empty from "../components/LockComp/Empty";

export default {
  title: "Example/Empty",
  component: Empty,
};

const Template = (args) => <Empty {...args} />;

export const Default = Template.bind({});
