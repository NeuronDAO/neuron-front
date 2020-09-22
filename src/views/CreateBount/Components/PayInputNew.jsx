import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

/**
 * [Инпут с селектором, в котором мы добавляем максимально доступную сумму для
 * снятия для 1 из 3 типов валют]
 *
 * @param {Array} props [Получаем список параметров от родитеьлнского элемента]
 * @param {String, Number} props.ETH [Количество доступных средств в ETH]
 * @param {String, Number} props.DAI [Количество доступных средств в DAI]
 * @param {String, Number} props.OCEAN [Количество доступных средств в OCEAN]
 *
 * К сожалению, на момент написания этоо компонента, я не знал что валюты
 * будет 3. По этому решение, которое я здесь использую не подходит для
 * нескольких валют. Однако, если передавать их через массив, то всё будет ОК)
 */
const CustomizedInputBase = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({payType: "ETH"});
  const [pay, setValues] = React.useState({payGo: props.eth});

  const handleChange = (event) => {
    setState({...state, payType: event.target.value});
    setValues({payGo: 0});
  };
  const handleClick = (val) => {
    setValues({payGo: 111});
  };

  return (
    <>
      <Paper className={classes.root} variant="outlined">
        <InputBase
          className={classes.input}
          placeholder="Enter payment"
          value={pay.payGo}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <Select
          className={classes.actionSelect}
          variant="standard"
          native
          value={state.payType}
          onChange={handleChange}
        >
          <option value="ETH" className={classes.select}>
            ETH
          </option>
          <option value="DAI" className={classes.select}>
            DAI
          </option>
          <option value="OCEAN" className={classes.select}>
            OCEAN
          </option>
        </Select>
      </Paper>
      <Typography variant="caption" display="block" className={classes.help}>
        Доступный баланс:
        <strong className={classes.link} onClick={handleClick}>
          THIS_IS_NUMBER{" "}
        </strong>
        {state.payType}{" "}
      </Typography>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "350px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  select: {
    fontSize: theme.typography.pxToRem(13),
  },
  actionSelect: {
    fontSize: theme.typography.pxToRem(14),
  },
  link: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    fontWeight: "700",
  },

  help: {margin: "7px 2px"},
}));

export default CustomizedInputBase;
