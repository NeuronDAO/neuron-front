import React from "react";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

/**
 *
 * @param {Array} props [Массив данных полученый от родителя]
 * @param {String} props.header [Название раздела]
 * @param {String} props.text [Описание раздела]
 */
export default function TextInfo(props) {
  return (
    <>
      <Typography variant="h6">{props.header}</Typography>
      <Typography variant="subtitle2" paragraph>
        {props.text}
      </Typography>
    </>
  );
}
