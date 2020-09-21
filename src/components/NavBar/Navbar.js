import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListIcon from '@material-ui/icons/List';

/**
 * Ты смотришь на универсальный файл для генерации верхнего меню сайта 
 * Здесь мы прокидываем пропсы для авторизации пользователей, подменяем 
 * название меню и управлеяем списокм доступных ссылок
 */

import LeftMenu from './LeftMenu'; // Подключаем левое (мобильное меню)
import UserAutch from './UserInfo'; // Подключаем блок информации о пользователе 

// Ссылки хранятся здесь, массивом. 
const menuList = [
 {id: 1, name: 'Explorer ',     path: '/explorer', title: 'Список доступных заданий', icon: <ListIcon /> },
 {id: 2, name: 'Leader board ', path: '/leaderboard', title: 'Таблица лидеров', icon: <ListIcon /> },
 {id: 3, name: 'Dashboard ',    path: '/my/dashboard', title: 'Дашбоард', icon: <ListIcon /> },
];

/**
 * [Функция генерации готового верхнего меню. Получает 2 значения title и isAutch. 
 * Значение title - выводится в самом меню слеов (оно же название раздела). 
 * isAutch - перекидывается вниз. к компоненту UserAutch ]
 * 
 * @param {Array}  props [Получаемый массив данных из родительского компонента]
 * @param {String} props.title [Название страницы, которое просматривает пользователь | Задаётся прямиком из родительнского компонента]  
 * @param {Bool or String} props.isAutch [Прокидывает данные о пользователе дальше, к элементу UserAutch]
 * @returns {React Components} [Возвращает полностью собранное верхнее меню]
 */
export default function NavBar(props) {
  // Использовать CSS
  const classes = useStyles(); 
  // Если ничего не передано - то выводим дефолтный заголовок 
  const title = (props.pTitle.length < 1) ? 'Название раздела' : props.pTitle;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.NavBar} color="inherit">
       <Container size="lg">
        <Toolbar disableGutters={true}>        
            <LeftMenu menuList={menuList} />
          <Typography variant="h6" className={classes.title} noWrap>
            {title}
          </Typography>

          {/* Use UserInfo Components */}
          <UserAutch isAutch={props.isAutch} />

        </Toolbar>
        </Container>
      </AppBar>

    </div>
  );
}


// Локальный CSS 
const useStyles = makeStyles((theme) => ({
  root: {flexGrow: 1,},
  NavBar: {boxShadow: 'none'},
  menuButton: {marginRight: theme.spacing(2),},
  title: {flexGrow: 1, marginLeft: '0.5rem'}
}));
