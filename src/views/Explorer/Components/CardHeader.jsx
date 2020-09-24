import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

/**
 * [Обрабатываем заголовок карточки со страницы ExpolrerPage]
 *
 * @param {String} title [Название карточки]
 * @returns {React Components} [Возвращаем полностью обработанный заголовок карты ExplorerPage]
 */
const CardHeader = ({title}) => {
  const classes = useStyles();

  return (
    <Typography variant="body1" gutterBottom className={classes.title}>
      {title ? (title.length > 120 ? title.substr(0, 115) + "..." : "") : ""}
    </Typography>
  );
};

const useStyles = makeStyles(() => ({title: {fontWeight: 700}}));

CardHeader.propTypes = {
  title: PropTypes.string,
};
CardHeader.defaultProps = {
  title: "title",
};
export default CardHeader;
