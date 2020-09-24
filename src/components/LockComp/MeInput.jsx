import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "sanitize.css";

/**
 * [Мы создаем универсальный инпут. который настраиваем через передаваемые пропсы
 * На всякий случай, есть дефолтные значения, если ты ничего не передал]
 *
 * @param {Array} props [Массив данных для формирования Инпута]
 * @param {Num}    props.id    [Уникальный идентификатор Инпута]
 * @param {Bool}   props.full  [Сделать инпут на всю ширину контента]
 * @param {String} props.value [Значение в инпуте по умолчанию]
 * @param {String} props.label [Название инпута (LAbel)]
 * @param {String} props.place [Placeholder - если не передан то ничего и не выводим]
 * @param {String} props.type  [Тип инпута (text | pass | number) ]
 *
 */
const MeInput = ({full, value, label, place, type, id}) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <TextField
          id={id}
          fullWidth={!!full}
          defaultValue={value ? value : ""}
          placeholder={place ? place : false}
          type={type ? type : "text"}
          size="small"
          variant="outlined"
        />
      }
      label={label ? label : false}
      className={classes.label}
      labelPlacement="top"
    />
  );
};

//  Local CSS
const useStyles = makeStyles((theme) => ({
  root: {margin: "20px 0"},
  label: {
    display: "flex",
    alignItems: "baseline",
    margin: "10px 0",
    width: "100%",
    maxWidth: "100%",
    color: theme.palette.text.secondary,
  },
}));

MeInput.propTypes = {
  full: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  place: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};
MeInput.defaulProps = {
  full: "full",
  value: "value",
  label: "label",
  place: "placeholder",
  type: "input type",
  id: "id",
};
export default MeInput;
