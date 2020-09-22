import React from "react";
import UserInfoAccordion from '../components/UserInfo/UserInfoAccordion';

import * as UserRowLinks from './UserRowLinks.stories';


/**
 * Так выглядит полный профиль пользотваеля, который мы можем настраивать 
 * расширяя передаваемые значения. Аватар подтягивается автоматически, если 
 * ничего не передать то мы увидем первую букву имени (ПУШЕЧКА)
 */
export default {
  title: "User info / Accardion",
  component: UserInfoAccordion,
};

const Template = (args) => <UserInfoAccordion {...args} />;

export const Default = Template.bind({});


Default.args = {
    name: "Sergey Dolmatov",
    avatar: "/",
    cash: "asd",
    about: "",
    to: "",
    links: UserRowLinks.Default, // Не уверен, что я правильно это вызвал
};
