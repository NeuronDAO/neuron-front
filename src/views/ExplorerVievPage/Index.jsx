import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// Подключем Меню import NavBar 
import Navbar  from '../../components/NavBar/Navbar';
// Подключаем нашу карту 
import Card from './Components/Card';
// Модуль информации о создателе объъявления 
import UserInfoAccordion from '../../components/UserInfo/UserInfoAccordion';
// 
import TabsDown from './Components/Tabs';


/**
 * Здесь мы собираем стрницу просмотра задачи 
 * 
 * Мы отдельно получаем инфомрацию о пользвоателе, создавшем этот проект (UserInfoAccordion)
 * 
 * Отдельно получаем информацию о самой задаче (Cards)
 * 
 * И отдельно получаем информацию о ставках и комментариях (TabsDown)
 * 
 */
function ExplorerPage () {    
    const classes = useStyles();


    return (
        <>
        <Navbar isAutch={false} pTitle="Viev Project to Explorer"></Navbar>
        <Container maxWidth="md" className={classes.root}>     

         {/* Информация о создателе объявления */}
         <UserInfoAccordion name="Sergey Dolmatov" about="Тут инфомраци об о мне" avatar="/" cash="0x09812098exzc102983109" />

         {/* Сама карточка (описание и добавление ставки лежит тут) */}
         <Card title="Тут крутое название проекта" desc="Тут наше новенькое описание" />

         {/* Вызываем блок с комментариями и текущеми ставками  */}

         <TabsDown />
        </Container>        
        </>
    )
}

export default ExplorerPage;

// LOC CSS
const useStyles = makeStyles(() => ({
  root: {marginTop: '20px',},
  infoCard: {padding: '12px 16px',},
}));
