import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import "sanitize.css";

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
const CardLabel = ({chipArr}) => {
  // USE CSS
  const classes = useStyles();

  return (
    <div>
      {chipArr.map((item) => (
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
};

const useStyles = makeStyles(() => ({chiip: {margin: "3px 2px"}}));

CardLabel.defaultProps = {
  chipArr: [
    {id: 1, name: "name 1"},
    {id: 2, name: "name 2"},
    {id: 3, name: "name 3"},
  ],
};
export default CardLabel;
