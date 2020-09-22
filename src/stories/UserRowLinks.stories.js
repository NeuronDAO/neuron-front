import React from "react";
import UserLinksAll from '../components/UserInfo/UserLinksAll.jsx';

import * as UserSocLinkStories from './UserSocLink.stories';



export default {
  title: "Social icon / ROW LINKS",
  component: UserLinksAll,
};

const Template = (args) => <UserLinksAll {...args} />;

export const Default = Template.bind({});


Default.args = {
  chips : [
    { ...UserSocLinkStories.Telegram.args, id:1, label: 'Telegram', link: '' },
    { ...UserSocLinkStories.WebSite.args, id:2, label: 'WebSite', link: '' },
    { ...UserSocLinkStories.Twiter.args, id:3, label: 'Twiter', link: '' },
    { ...UserSocLinkStories.GitHub.args, id:4, label: 'GitHub', link: '' },
    { ...UserSocLinkStories.Linked.args, id:5, label: 'Linked', link: '' },
    
  ],
};
