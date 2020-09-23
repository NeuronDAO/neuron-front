import * as React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import MaterialCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

// Тут мы берём компаненты со страницы Explorer
import CardChip from "../../../components/LocCards/CardLabel";
import CardDetails from "../../../components/LocCards/CardInfo";

// Комопненты, которые мы теняем со текущей страницы
import CardDesc from "./CardDesc";
import ModalAdd from "../Modal/ModalAdd";
import CardSale from "./CardSale";

import "sanitize.css";

/**
 * [Здесь мы формируем контент карточки проекта, подставляем описание, название прочие блоки,
 * которые передаются из родительского эллемента (Хотя, мне кажется лучше получать их ПО АПИ)]
 *
 * @param {Array} props [Массив данных полученный из родитеслького компонента ]
 * @param {String} props.title [Название работы (Верхний заголвок)]
 * @param {String} props.desc [Описания заадчи]
 */

const Card = ({
  title,
  desc,
  isActive,
  difficulty,
  timeRemaining,
  numberExpressedInterest,
  tags,
}) => {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.title} gutterBottom>
          {title}
        </Typography>

        <CardDetails
          isActive={isActive}
          difficulty={difficulty}
          timeRemaining={timeRemaining}
          numberExpressedInterest={numberExpressedInterest}
        />
      </CardContent>

      <CardContent>
        <CardDesc desc={desc} />
      </CardContent>

      <CardContent>
        <CardChip chipArr={tags} />
      </CardContent>

      <Divider variant="fullWidth" />

      <CardContent className={classes.cardFooter}>
        <ModalAdd />
        <CardSale eth="0.000025" usd="14022.33" />
      </CardContent>
    </MaterialCard>
  );
};

const useStyles = makeStyles(() => ({
  root: {maxWidth: "100%"},
  title: {fontWeight: 700},
  cardFooter: {
    display: "flex",
    alignItems: "center",
  },
}));

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  isActive: PropTypes.bool,
  difficulty: PropTypes.string,
  timeRemaining: PropTypes.string,
  numberExpressedInterest: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
};
Card.defaultProps = {
  title: "Bounty title",
  desc: "Bounty description, extended text",
  isActive: true,
  difficulty: "beginner",
  timeRemaining: "1 month",
  numberExpressedInterest: "17",
  tags: [{id: 1, name: "Python"}],
};
export default Card;
