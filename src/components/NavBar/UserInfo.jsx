import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Тянем сюда окна авторизации
import NoMaskModal from "../Modal/ModalNoMeta";

/**
 * [Если в Функцию передаётся FALSE - то мы считаем что пользователь не авторизирован и возвращем ему
 * вслывающее окно, для атворизации]
 *
 * [Если получено ЧТОТО (отличное от false), то мы показываем информацию из PROPS]
 *
 * @param {Array}  props [Массив принимаемых даннех]
 * @param {String} props.userName [USER IN ALT TEXT in Avatar | Sergey Dolmatov]
 * @param {String} props.avatar   [USER IN SRC TEXT in Avatar | https://klike.net/uploads/posts/2019-07/1564314090_3.jpg]
 * @returns {Reacr Components}    [Возвращает независимые реакт компонента ]
 *
 */
export default function UserAutch(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null); // Устаналвиванем настройки селектора

  // Если пользователь авторизирован то отдаём Его автарку и выподающий список
  if (props.isAutch !== false) {
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }; // Обработчик на клик по аватарке
    const handleClose = () => {
      setAnchorEl(null);
    }; // Обработчик на по ссылке (или по области экрана)
    return (
      <>
        {/* LINK GO TO CREATE PROJECT */}
        <Button variant="outlined" component={Link} to="/create-bounty">
          Create new
        </Button>

        {/* DROP DOWN ACTION AND USER AVATAR */}
        <div className={classes.UserAvatar} onClick={handleClick}>
          <Avatar alt={props.isAutch.userName} src={props.isAutch.avatar} />
        </div>

        {/* DROP DOWN MENU  */}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.item}
        >
          {/* DROP DOWN ITEMS  */}
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/my/profile"
            className={classes.itemLink}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/my/setting"
            className={classes.itemLink}
          >
            Account setting
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} className={classes.itemLink}>
            Logout
          </MenuItem>
        </Menu>
      </>
    );
  }
  // Если пользователь не авторизирован то возвращаем контент из всплывающего окна
  else {
    return <NoMaskModal />;
  }
}

// Локальный CSS
const useStyles = makeStyles((theme) => ({
  items: {width: "200px"},
  UserAvatar: {marginLeft: "10px"},
  itemLink: {fontSize: theme.typography.pxToRem(15), color: theme.palette.text.secondary},
}));
