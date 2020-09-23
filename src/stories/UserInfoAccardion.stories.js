import React from "react";
import {MemoryRouter} from "react-router";

import UserInfoAccordion from "../components/UserInfo/UserInfoAccordion";
import * as UserRowLinks from "./UserRowLinks.stories";

/**
 * Так выглядит полный профиль пользотваеля, который мы можем настраивать
 * расширяя передаваемые значения. Аватар подтягивается автоматически, если
 * ничего не передать то мы увидем первую букву имени (ПУШЕЧКА)
 */
export default {
  title: "User info / Accardion",
  component: UserInfoAccordion,
};

const Template = (args) => (
  <MemoryRouter>
    <UserInfoAccordion {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
export const Full = Template.bind({});

Default.args = {
  name: "Name",
  avatar: "/",
  cash: "this_is_cash",
  about: "",
  link: "/this_is_link",
  links: UserRowLinks.Default, // Не уверен, что я правильно это вызвал
};

Full.args = {
  name: "Sergey Dolmatov",
  avatar:
    "https://avatars.mds.yandex.net/get-zen_doc/40274/pub_5b80f584f86d9500aaed0776_5b80f842d83c5800ae7def5a/scale_1200",
  cash: "0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
  about: "привет Сторибук",
  link: "/0x9e11119BE78779a7cE912D9cEB698Fb3Ef5A2fB0",
  links: UserRowLinks.Default, // Не уверен, что я правильно это вызвал
};
