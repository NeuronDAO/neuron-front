import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

// Подключаем наши компоненты
import ChipLabel from "../../../components/LocCards/CardLabel";
import CardDetails from "../../../components/LocCards/CardInfo";
import CardHeader from "./CardHeader";
import CardSale from "./CardSale";
import CardDesc from "./CardDesc";

import "sanitize.css";

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

const Card = ({
  id,
  title,
  rewardInTokens,
  rewardInUsd,
  isActive,
  difficulty,
  timeRemaining,
  numberExpressedInterest,
  desc,
  goToProjectPath,
  chipArr,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === `panel${id}`}
        onChange={handleChange(`panel${id}`)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>
            <CardHeader title={title} />
            <ChipLabel chipArr={chipArr} />
          </div>

          <CardSale eth={rewardInTokens} usd={rewardInUsd} />
        </AccordionSummary>

        <AccordionDetails className={classes.flexCont}>
          <CardDetails
            isActive={isActive}
            difficulty={difficulty}
            timeRemaining={timeRemaining}
            numberExpressedInterest={numberExpressedInterest}
          />
          <CardDesc desc={desc} />

          <Button component={Link} to={goToProjectPath} variant="outlined">
            go to project
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  // Не даем названию зализать на цену
  heading: {
    flexBasis: "calc(100% - 95px)",
    flexShrink: 0,
    paddingRight: "10px",
  },
  flexCont: {
    display: "flex",
    flexFlow: "wrap row",
  },
}));

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  difficulty: PropTypes.string,
  isActive: PropTypes.bool,
  rewardInTokens: PropTypes.string,
  rewardInUsd: PropTypes.string,
  chipArr: PropTypes.arrayOf(PropTypes.object),
  timeRemaining: PropTypes.string,
  numberExpressedInterest: PropTypes.string,
  desc: PropTypes.string,
  goToProjectPath: PropTypes.string,
};
Card.defaultProps = {
  id: "1",
  title: "card title",
  rewardInTokens: "212",
  rewardInUsd: "2222",
  isActive: true,
  difficulty: "beginner",
  chipArr: [
    {id: 0, name: "Python"},
    {id: 1, name: "Go"},
    {id: 2, name: "C++"},
    {id: 3, name: "Rust"},
  ],
  timeRemaining: "1 month",
  numberExpressedInterest: "10",
  desc: "This is a long description of the work expected to be finished",
  goToProjectPath: "#",
};

export default Card;
