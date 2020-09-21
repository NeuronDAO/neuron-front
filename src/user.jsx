import React from "react";
/**
 * Этот файл отвечает за эмитацию авторизации пользвоателя
 * Если нам надо получить данные по пользователю, то просто меняем
 * экспортируеме значение с bad на ok
 */
export const users = {
  ok: {
    state: true,
    name: "Sergey",
    surName: "Dolmatov",
    balance: "0,00",
    ehtCash: "0x0102938120381021938120asdi102983",
  },
  bad: {
    state: false,
  },
};
export const isAutch = React.createContext(users.bad);
