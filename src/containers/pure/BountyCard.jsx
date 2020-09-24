import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

// ! OTHER CONTAINER DEPENDENCIES
import AvatarAndAddress from "./AvatarAndAdderss";
import LabelsArray from "./LabelsArray";

const BountyCard = ({
  address,
  ariaLabel,
  title,
  labels,
  avatar,
  usdReward,
  userName,
  handleClick,
}) => {
  // todo: avatar with badge to indicate if online: https://material-ui.com/components/avatars/#avatar
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box cursor="pointer">
              <Typography variant="h6" onClick={handleClick} style={{cursor: "pointer"}}>
                {title}
              </Typography>
            </Box>
            <LabelsArray labels={labels} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" align="right">
              {usdReward}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardHeader
        avatar={
          <AvatarAndAddress
            address={address}
            ariaLabel={ariaLabel}
            avatar={avatar}
            userName={userName}
          />
        }
      />
    </Card>
  );
};

BountyCard.propTypes = {
  avatar: PropTypes.string,
  ariaLabel: PropTypes.string,
  address: PropTypes.string,
  title: PropTypes.string,
  labels: PropTypes.array,
  usdReward: PropTypes.string,
  userName: PropTypes.string,
  handleClick: PropTypes.func,
};

// ! TO KEEP STORIES IN STORYBOOK HERMETIC DO NOT CREATE A CONSTS FILE. BETTER BE REPETITIVE IN COMPONENTS THAN LOSE HERMETICITY
BountyCard.defaultProps = {
  avatar:
    "https://gateway.pinata.cloud/ipfs/QmNpfCosLnzcHuGv7nyBN16rz6UuZfJ4hwTCKVxuGaDAPZ",
  ariaLabel: "user",
  address: "0x0000000000000000000000000000000000000000",
  title: "High frequency ETH/USD Coinbase data",
  labels: ["trading-data", "high-frequency"],
  usdReward: "$12.22",
  userName: "$NAZ",
  handleClick: () => {},
};

export default BountyCard;
