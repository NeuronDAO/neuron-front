import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

/**
 * @param {String} header [Название раздела]
 * @param {String} text [Описание раздела]
 */
const TextInfo = ({header, text}) => {
  return (
    <>
      <Typography variant="h6">{header}</Typography>
      <Typography variant="subtitle2" paragraph>
        {text}
      </Typography>
    </>
  );
};

TextInfo.propTypes = {
  header: PropTypes.stirng,
  text: PropTypes.string,
};
TextInfo.defaultProps = {
  header: "header",
  text: "text",
};
export default TextInfo;
