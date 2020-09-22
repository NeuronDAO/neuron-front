import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Typography from "@material-ui/core/Typography";

import ListRs from "./LeadList";
import NoDate from "../../../components/LockComp/Empty";

/**
 * Блок генерации карточек. Вот и как это сделать правильно?
 * Хотелось бы переиспользвоать этот коммпонент, но не выходит
 *
 * Слишком много переменных. С другой стороны разложу его на части
 * и будет мне счастье
 *
 * @param {*} props
 */
export default function CustomizedTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [run, setRun] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRun(11); // Я не понимаю как именно передать сюда значение run
  };

  return (
    <TabContext value={value}>
      <Typography variant="body1" gutterBottom>
        {props.header}
      </Typography>
      <AppBar position="static" className={classes.app} color="transparent">
        <TabList onChange={handleChange}>
          {props.tabs.map((row) => (
            <Tab key={row.name} label={row.name} value={row.value} run={row.run} />
          ))}

          <Typography className={classes.run}>{run}</Typography>
        </TabList>
      </AppBar>
      <TabPanel value="1" className={classes.panel}>
        <ListRs />
      </TabPanel>
      <TabPanel value="2" className={classes.panel} backgroundColor="#fff">
        <NoDate
          header="There are 0 Draft project"
          text="Over time, your completed projects will appear here"
        />
      </TabPanel>
    </TabContext>
  );
}

// LOC CSS
const useStyles = makeStyles(() => ({
  panel: {
    padding: 0,
    margin: 0,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  app: {
    marginTop: 20,
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  run: {
    position: "absolute",
    right: 15,
    top: 10,
    padding: "3px 4px",
    backgroundColor: "rgba(1,1,1,0.10)",
    borderRadius: 3,
    fontSize: 13,
  },
}));
