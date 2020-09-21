import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

// Подключаем наши компоненты
import ChipLabel from "../../../components/LocCards/CardLabel";
import CardDop from "../../../components/LocCards/CardDop";
import CardHeader from "../../ExplorerPage/Components/CardHeader";
import CardSale from "../../ExplorerPage/Components/CardSale";

// Массив с даннымми
import chipArr from "../../ExplorerPage/Chips.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
  },
  heading: {
    flexBasis: "calc(100% - 95px)",
    flexShrink: 0,
    paddingRight: "10px",
  },
  flexCont: {
    display: "flex",
    flexFlow: "wrap row",
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel" + props.id}
        onChange={handleChange("panel" + props.id)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>
            {/* CARD TITLE  */}
            <CardHeader title={props.title} />

            {/* CARD CHIPS  */}
            <ChipLabel chipArr={chipArr} />
          </div>

          {/* CARD SALE */}
          <CardSale eth={props.saleEth} usd={props.saleUsd} />
        </AccordionSummary>

        <AccordionDetails className={classes.flexCont}>
          {/* DOP INFO CARD */}
          <CardDop dif={props.difficulty} rem={props.remaining} exp={props.expected} />
          {/* DESCRIPTION CARD */}

          {/* BUTTON LINK GO TO PROJECT */}
          <Button component={Link} to="/explorer/viev" variant="outlined">
            go to project
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
