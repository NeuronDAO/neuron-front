import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import "sanitize.css";

/**
 * [Универсальный TextArea, который автоматически расстягивается по длинне
 * конентной области страницы]
 *
 * @param {Array}  props [Массив данных для формирования ТекстАреа]
 * @param {Num}    props.id    [Уникальный идентификатор ТекстАреа]
 * @param {Bool}   props.full  [Сделать текстАреа на всю ширину контента]
 * @param {String} props.value [Значение в ТекстАреа по умолчанию]
 * @param {String} props.label [Название ТекстАреа (LAbel)]
 * @param {String} props.place [Placeholder - если не передан то ничего и не выводим]
 *
 */

const MeTextArea = ({full, value, label, place, id}) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      control={
        <TextField
          fullWidth={full ? true : false}
          id={id}
          placeholder={place ? place : false}
          multiline
          defaultValue={value ? value : ""}
          variant="outlined"
          size="small"
        />
      }
      label={label ? label : false}
      labelPlacement="top"
      className={classes.label}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  label: {
    display: "flex",
    alignItems: "baseline",
    margin: "10px 0",
    width: "100%",
    maxWidth: "100%",
    color: theme.palette.text.secondary,
  },
}));

MeTextArea.propTypes = {
  full: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  place: PropTypes.string,
  id: PropTypes.string,
};
MeTextArea.defaultProps = {
  full: "full",
  value: "value",
  label: "label",
  place: "placeholder",
  id: "id",
};
export default MeTextArea;
