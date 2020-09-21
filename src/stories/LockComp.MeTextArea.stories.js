import React from "react";

import MeTextArea from "../components/LockComp/MeTextArea";

export default {
  title: "Example/MeTextArea",
  component: MeTextArea,
};

const Template = (args) => <MeTextArea {...args} />;

export const Default = Template.bind({});
