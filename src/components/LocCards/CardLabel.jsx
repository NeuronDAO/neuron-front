import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

/**
 * [Здесь мы формируем полоску с чипами, для вывода на стрнице ExplorePage | ExplorerVievPage.
 * Просто передавай сюда нужные параметры и наслождайся реуздтатом]
 *
 * @param {Array} props [Массив данных полученный из компонента Card]
 * @param {Array} props.chipArr [Массив с данными для формирования CHIP (Label)]
 * @param {Num} props.chipArr.id [Идентификатор чипа, нужен для генерации уникального ключа]
 * @param {String} props.chipArr.name [Название чипа - выводится в списке чипов]
 * @returns {React Components} [По полученным параметрам возвращаем список Чипов]
 */
export default function LabelGroup(props) {
  // USE CSS
  const classes = useStyles();

  return (
    <div>
      {props.chipArr.map((item) => (
        <Chip
          key={item.id}
          label={item.name}
          className={classes.chiip}
          variant="outlined"
          color="default"
          size="small"
        />
      ))}
    </div>
  );
}
// LOCAL CSS
const useStyles = makeStyles(() => ({chiip: {margin: "3px 2px"}}));
