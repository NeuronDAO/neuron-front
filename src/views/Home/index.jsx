import React from "react";
import {Link} from "react-router-dom";
import "sanitize.css";

const Home = () => {
  return (
    <>
      <h1>Выбери ссылку </h1>
      <Link to="/explorer/view"> Просмотр проекта</Link>
      <Link to="/explorer"> Список проектов</Link>
      <Link to="/leaderboard"> Список лидеров</Link>
      <Link to="/create-bounty"> Создать проект</Link>

      <Link to="/my/setting"> Мои настройки</Link>
      <Link to="/my/dashboard"> Публичный дашборд</Link>
    </>
  );
};
export default Home;
