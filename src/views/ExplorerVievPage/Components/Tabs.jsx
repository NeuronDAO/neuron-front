import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import Comment from "../Comments/Index";
import NoDate from "../../../components/LockComp/Empty";
import AddComment from "../Modal/ModalAddComment";

/**
 * [статический (к сожалению) блок переключения карточек между комментариями
 * и ставками, которые сделали пользовтели. По умолчанию активные - ставки]
 *
 * Я не думаю что в этот компонент данные должны пробрастываться через пропсы
 * ИМХО - лучше генерирровать запрос за получением данных в компоненнте
 *
 * P.S. Использует только на странице ExplorerVievPage
 */
export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static" color="inherit" className={classes.header}>
          <TabList
            onChange={handleChange}
            aria-label="Выбрать между ставками и комментариями"
          >
            <Tab label="Submissions" value="1" />
            <Tab label="Comments" value="2" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          {/* Пример сделанной ставки */}
          <Comment
            uName="Sergey Dolmatov"
            uLink="/userLink"
            text="Experiment to gamify the Moloch DAO universe with badges, Certificates and leaderboards.
            Badges: onchain events inform the badge awards. things like voted on a proposal once, voted ten times, votes 100 times.
            This is powered by the Daohaus subgraph and has all Daos in the Moloch universe."
            link="https://dock.google.com/asad0iaskldkj190wdjasldj10jaslkdj10wjdalskjd019jdalsjk"
          />
        </TabPanel>

        <TabPanel value="2">
          <AddComment />
          {/* Если информации нет то выводим заглушку */}
          <NoDate
            header="There are 0 comments"
            text="Submit a comment using the form above."
          />

          {/* Если хочешь посмотреть на комментарий, расскоментируй эту строку
            <Comment  
            uName="User Name" 
            uLink="User Link"
            text="Text Comments" 
            link=""

          /> */}
        </TabPanel>
      </TabContext>
    </div>
  );
}

// USE STYLE CSS
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: "20px auto",
  },
  header: {
    boxShadow: "none",
  },
}));
