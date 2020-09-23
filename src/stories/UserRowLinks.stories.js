import React from "react";
import UserLinksAll from "../components/UserInfo/UserLinksAll.jsx";

import IconTelega from "@material-ui/icons/Telegram";
import IconSite from "@material-ui/icons/Language";
import IconTwitter from "@material-ui/icons/Twitter";
import IconGithub from "@material-ui/icons/GitHub";
import IconLinked from "@material-ui/icons/LinkedIn";

export default {
  title: "Social icon / ROW LINKS",
  component: UserLinksAll,
};

const Template = (args) => <UserLinksAll {...args} />;

export const Default = Template.bind({});

Default.args = {
  chips: [
    {label: "Telegram", link: "https://t.me/user", icon: <IconTelega />},
    {label: "WebSite", link: "https://mywebsite.com", icon: <IconSite />},
    {label: "Twiter", link: "", icon: <IconTwitter />},
    {label: "GitHub", link: "", icon: <IconGithub />},
    {label: "Linked", link: "", icon: <IconLinked />},
  ],
};
