import React from "react";

import RegisterModal from "../components/pure/RegisterModal";

export default {
  title: "Example/RegisterModal",
  component: RegisterModal,
};

const Template = (args) => <RegisterModal {...args} />;

export const Primary = Template.bind({});
