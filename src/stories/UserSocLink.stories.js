import React from "react";
import UserLinks from '../components/UserInfo/UserLink.jsx';

// ENTER LINK
import IconTelega from '@material-ui/icons/Telegram';
import IconSite    from '@material-ui/icons/Language';
import IconTwiter  from '@material-ui/icons/Twitter';
import IconGitHub  from '@material-ui/icons/GitHub';
import IconLinked  from '@material-ui/icons/LinkedIn';

/**
 * Так выглядит полная панель социальных сетей пользователя 
 * (Дефолтные значение становится если передать пустую строку link !! ВНИМАНИЕ параметр объязательный)
 */
export default {
  title: "Social icon / All chip",
  component: UserLinks,
};

const Template = (args) => <UserLinks {...args} />;

export const Primary = Template.bind({});
export const Telegram = Template.bind({});
export const WebSite = Template.bind({});
export const Twiter = Template.bind({});
export const GitHub = Template.bind({});
export const Linked = Template.bind({});


Primary.args = {
  label: 'defult link',
  link: ''
};

Telegram.args = {
  label: '@dolmatov_s',
  icon: <IconTelega />,
  link: 'https://t.me/dolmatov_s'
};


WebSite.args = {
  label: 'freelancehunt.com',
  icon: <IconSite />,
  link: 'https://freelancehunt.com/'
};

Twiter.args = {
  label: 'Twiter',
  icon: <IconTwiter />,
  link: ''
};

GitHub.args = {
  label: 'GitHub',
  icon: <IconGitHub />,
  link: ''
};

Linked.args = {
  label: 'Linked',
  icon: <IconLinked />,
  link: ''
};



