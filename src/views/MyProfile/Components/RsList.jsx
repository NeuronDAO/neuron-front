import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

// Подключаем наши компоненты
import ChipLabel from "../../../components/LocCards/CardLabel";
import CardDetails from "../../../components/LocCards/CardInfo";
import CardHeader from "../../ExplorerPage/Components/CardHeader";
import CardSale from "../../ExplorerPage/Components/CardSale";

// Массив с даннымми
import chipArr from "../../ExplorerPage/Chips.json";

const ControlledAccordions = ({
  id,
  title,
  rewardInTokens,
  rewardInUsd,
  difficulty,
  remainingTime,
  chipArr,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === `panel${id}`}
        onChange={handleChange(`panel${id}`)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>
            <CardHeader title={title} />
            {/* CARD CHIPS  */}
            <ChipLabel chipArr={chipArr} />
          </div>

          <CardSale eth={rewardInTokens} usd={rewardInUsd} />
        </AccordionSummary>

        <AccordionDetails className={classes.flexCont}>
          <CardDetails dif={difficulty} rem={remainingTime} />
          <Button component={Link} to="/explorer/view" variant="outlined">
            go to project
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const useStyles = makeStyles(() => ({
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

ControlledAccordions.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  rewardInTokens: PropTypes.number,
  rewardInUsd: PropTypes.number,
  difficulty: PropTypes.oneOf(["beginner", "intermediate", "advanced"]),
  remainingTime: PropTypes.string,
  chipArr: PropTypes.arrayOf(PropTypes.object),
};
ControlledAccordions.defaultProps = {
  id: "1",
  title: "Title",
  rewardInTokens: 200,
  rewardInUsd: 24000,
  difficulty: "beginner",
  remainingTime: "2 months",
  chipArr,
};
export default ControlledAccordions;
