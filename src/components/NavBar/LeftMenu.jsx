import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";

import "sanitize.css";

/**
 * [Здесь мы генерируем левое меню (то что открывает по нажатию на бургер). ]
 *
 * @param {Array}  props.menuList [Рабочий массив ссылок, полученный из компонента Navbar]
 * @param {Num}    props.menuList.id [Идентификатор ссылки - нужен для генерации уникального ключа]
 * @param {String} props.menuList.patch [Путь ссылки - Путь ссылки для React Router]
 * @param {String} props.menuList.name [название ссылки - Название ссылки, которое видит пользователь]
 * @param {React Component} props.menuList.icon [Иконка ссылки - подставляется как React комопнент в список слево]
 *
 */
const TemporaryDrawer = ({menuList}) => {
  // USE CSS
  const classes = useStyles();
  // Set State Open type menu - Left | Defualt false - то есть закрытое
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    // Вещаем обработчик на собтия TAB |KeyDown | Shift
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    // Задаем значение меню - в нажем случае - открыть
    setState({...state, [anchor]: open});
  };

  // ВЫносим сюда формирование ссылок | Простой перебор по .map()
  const list = () => (
    <div>
      {/* LIST ITEMS CONTENTS  */}
      <List className={classes.list}>
        {menuList.map((item) => (
          <ListItem component={Link} to={item.path} button key={item.id}>
            {/* LEFT ITEM ICON */}
            <ListItemIcon>{item.icon}</ListItemIcon>

            {/* LEFT ITEM NAME */}
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  // возвращаем сегенрированое меню
  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("left", true)}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

const menuList = [
  {
    id: 1,
    name: "Bounty Explorer",
    path: "/explorer",
    title: "Bounty jobs",
    icon: <ListIcon />,
  },
  {
    id: 2,
    name: "Leaderboard ",
    path: "/leaderboard",
    title: "Leaderboard",
    icon: <ListIcon />,
  },
  {
    id: 3,
    name: "Dashboard ",
    path: "/dashboard",
    title: "Dashboard",
    icon: <ListIcon />,
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

TemporaryDrawer.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object),
};
TemporaryDrawer.defaultProps = {
  menuList,
};
export default TemporaryDrawer;
