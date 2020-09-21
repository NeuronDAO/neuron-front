import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import IconSite from '@material-ui/icons/Language';
import IconTwiter from '@material-ui/icons/Twitter';
import IconGitHub from '@material-ui/icons/GitHub';
import IconLinked from '@material-ui/icons/LinkedIn';
import IconTelega from '@material-ui/icons/Telegram';
/**
 * [Формируем список ссылок, указанных пользователем]
 * 
 * @param {Array} props [Список ссылок в массиве]
 * @param {Bool, String} props.site [Персональный сайт пользователя]
 * @param {Bool, String} props.twitter [Ссылка на аккаунт в твитере]
 * @param {Bool, String} props.github [Ссылка на профиль на GitHub]
 * @param {Bool, String} props.linkedIn [Ссылка на профиль на Lindked]
 * @param {Bool, String} props.telegram [Ссылка на аккаунт в телеге]
 * 
 * Функция нуждается в переработке, исходя из полученного массива. 
 * Лучше будет писать обработки в цикле (там же расставлять иконки и ссылки), 
 * чем пытаться писать обработчик вот так, костылём 
 */
export default function MiddleDividers(props) {
  const 
    classes = useStyles(),
    isSite = (!props.site) ? true : false,
    isTwit = (!props.twitter) ? true : false,
    isGith = (!props.github) ? true : false,
    isLink = (!props.linkedIn) ? true : false,
    isTele = (!props.telegram) ? true : false;


  return (
    <div className={classes.root}>

      <Divider variant="fullWidth" />
      <div className={classes.section}>
        <Chip  icon={<IconSite />}   variant="outlined" disabled={isSite} size="small" className={classes.chip} label="WebSite" />
        <Chip  icon={<IconTwiter />} variant="outlined" disabled={isTwit} size="small" className={classes.chip} label="Twiter" />
        <Chip  icon={<IconGitHub />} variant="outlined" disabled={isGith} size="small" className={classes.chip} label="GitHub" />
        <Chip  icon={<IconLinked />} variant="outlined" disabled={isLink} size="small" className={classes.chip} label="LinkedIn" />
        <Chip  icon={<IconTelega />} variant="outlined" disabled={isTele} size="small" className={classes.chip} label="dolmatov_s" />
      </div>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    section: {        
      margin: theme.spacing(1, 0),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));