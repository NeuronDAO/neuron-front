import React from "react";
import Typography from "@material-ui/core/Typography";

/**
 * [Тут мы просто преобразуем полученное от пользователя описания
 * В разделённый на параграфы текст (в идеале).
 * К сожалению, пока что он выводит текст как есть]
 *
 * @param {Array} props [Массив данных от родителя]
 * @param {String} props.desc [Описание проекта]
 *
 * @returns {Reacr Components} [Возвращает набор параграфов]
 */

export default function CardDesc(props) {
  return (
    <>
      <Typography paragraph> {props.desc}</Typography>
    </>
  );
}
