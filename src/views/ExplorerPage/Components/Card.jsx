import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

// Подключаем наши компоненты
import ChipLabel from '../../../components/LocCards/CardLabel';
import CardDop from '../../../components/LocCards/CardDop';
import CardHeader from './CardHeader';
import CardSale from './CardSale';
import CardDesc from './CardDesc';

// Массив с даннымми для Chip
import chipArr from   '../Chips.json';


/**
 * [Эта функция генерирует карточку проекта, доступную на странице ExplorePage.
 * Важно деражть контроль над передаваемым данными] 
 * 
 * @param {Array} props [Массив данных получаемый со страницы Explorer PAGE]
 * @param {Number} props.id [Уникальный идентификатор панели !!! ЭТО ВАЖНО !!! ЕГО можнно будет передавать в LINK]
 * @param {String} props.title [Название работы]
 * @param {String, Number} props.saleUsd [Цена за работу указанная в USD]
 * @param {String, Number} props.saleEth [Цена за работу указанная в ETH]
 * @param {Bool}   props.status [Если TRUE - То проект активен, иначе - нет]
 * @param {String} props.difficulty [Уровень сложности (1 из 3 ) (Beginner | Intermediate | Expert)]
 * @param {String} props.remaining [Строка, показывающая сколько осталось до закрытия проекта]
 * @param {Number, String} props.expected [Количеств сделаных ставок]
 * @param {String} props.desc [Описание проекта, желательно до 300 символов]
 * @returns {React Compnents} [Возвращает готовый для перехода Аккаурдион]

 */
export default function ControlledAccordions(props) {
  // USE CSS
  const classes = useStyles();
  // USE OPEN ACCARDION STATE - DEF FALSE
  const [expanded, setExpanded] = React.useState(false);

  // Eventer change OPEN | CLOSE Accardion (Bool)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel'+props.id} onChange={handleChange('panel'+props.id)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <div className={classes.heading}>
            {/* CARD TITLE  */}
            <CardHeader 
              title={props.title}
            />

            {/* CARD CHIPS  */}
            <ChipLabel 
              chipArr={chipArr}               
            />
          </div>

            {/* CARD SALE */}
            <CardSale 
              eth={props.saleEth}
              usd={props.saleUsd}
            />
        </AccordionSummary>
        
        <AccordionDetails className={classes.flexCont}>
          {/* DOP INFO CARD */}
          <CardDop 
            status={props.status}
            dif={props.difficulty} 
            rem={props.remaining} 
            exp={props.expected} />
          {/* DESCRIPTION CARD */}
          <CardDesc 
            desc={props.desc}
          />

          {/* BUTTON LINK GO TO PROJECT */}
          <Button  component={Link} to="/explorer/viev" variant="outlined" >
              go to project
          </Button>

        </AccordionDetails>
      </Accordion>      
    </div>
  );
}

// LOCAL CSS
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '20px',
  },
  // Не даем названию зализать на цену
  heading: {
    flexBasis: 'calc(100% - 95px)',
    flexShrink: 0,
    paddingRight: '10px',
  },
  flexCont: {
    display: 'flex',
    flexFlow: 'wrap row',
  },
}));