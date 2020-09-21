import React, {useMemo} from "react";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const Chips = ({labels, handleFilterClick, textColor}) => {
  const chips = useMemo(
    () =>
      labels.map((label) => (
        <Chip
          key={label}
          variant="outlined"
          size="small"
          label={label}
          onClick={handleFilterClick}
          style={{
            margin: "2px",
            color: textColor ? textColor : "black",
          }}
        />
      )),
    [labels, handleFilterClick, textColor]
  );

  return <Box>{chips}</Box>;
};

Chips.propTypes = {
  labels: PropTypes.array,
  handleFilterClick: PropTypes.func,
  textColor: PropTypes.string,
};

Chips.defaultProps = {
  labels: ["golang", "c++", "kafka", "distributed", "aws"],
  handleFilterClick: () => {},
  textColor: "black",
};

export default Chips;
