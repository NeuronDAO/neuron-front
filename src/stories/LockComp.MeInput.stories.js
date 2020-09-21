import React from "react";

import MeInput from "../components/LockComp/MeInput";

export default {
  title: "Example/MeInput",
  component: MeInput,
};

const Template = (args) => <MeInput {...args} />;

export const Default = Template.bind({});
