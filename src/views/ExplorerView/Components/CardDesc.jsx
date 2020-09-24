import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

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

const CardDesc = ({desc}) => {
  return (
    <>
      <Typography paragraph> {desc}</Typography>
    </>
  );
};

CardDesc.propTypes = {
  desc: PropTypes.string,
};
CardDesc.defaultProps = {
  desc: "description",
};
export default CardDesc;
