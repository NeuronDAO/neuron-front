import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

// Тут мы берём компаненты со страницы Explorer
import CardChip from "../../../components/LocCards/CardLabel";
import CardDop from "../../../components/LocCards/CardInfo";
import chipDump from "../../ExplorerPage/Chips.json";

// Комопненты, которые мы теняем со текущей страницы
import CardDesc from "./CardDesc";
import ModalAdd from "../Modal/ModalAdd";
import CardSale from "./CardSale";

/**
 * [Здесь мы формируем контент карточки проекта, подставляем описание, название прочие блоки,
 * которые передаются из родительского эллемента (Хотя, мне кажется лучше получать их ПО АПИ)]
 *
 * @param {Array} props [Массив данных полученный из родитеслького компонента ]
 * @param {String} props.title [Название работы (Верхний заголвок)]
 * @param {String} props.desc [Описания заадчи]
 *
 *
 */

export default function RecipeReviewCard(props) {
  //  USE CSS
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.title} gutterBottom>
          {props.title}
        </Typography>

        {/*  думаю, что стаитчиеские данные не объязательно прокидывать через PROPS */}
        <CardDop status={true} dif="Beginner" rem="6 mounth" exp="3" />
      </CardContent>

      {/* PROJECT DESC  */}
      <CardContent>
        <CardDesc desc={props.desc} />
      </CardContent>

      {/* PROJECT CHIS */}
      <CardContent>
        <CardChip chipArr={chipDump} />
      </CardContent>

      <Divider variant="fullWidth" />

      <CardContent className={classes.cardFooter}>
        {/* START MODAL ADD  */}
        <ModalAdd />

        {/* START SALE PROJECT */}
        <CardSale eth="0.000025" usd="14022.33" />
      </CardContent>
    </Card>
  );
}

//  USE CSS
const useStyles = makeStyles(() => ({
  root: {maxWidth: "100%"},
  title: {fontWeight: 700},
  cardFooter: {
    display: "flex",
    alignItems: "center",
  },
}));
