import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

// ! DEPENDENCY - OTHER CONTAINERS
import LabelsArray from "./LabelsArray";
import AvatarAndAddress from "./AvatarAndAdderss";
import BountyDescription from "./BountyDescription";

const BgGrid = styled(Grid)`
  color: white;
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
  min-height: 300px;
  padding: 32px 32px 48px 32px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BountyViewWindow = ({
  title,
  labels,
  userName,
  address,
  usdReward,
  isActive,
  isImproveRequest,
  description,
}) => {
  return (
    <Grid container>
      <BgGrid item xs={12}>
        <Typography variant="h4">{title}</Typography>
        <LabelsArray labels={labels} textColor="white" />
        <Box display="flex" flexDirection="row" alignItems="space-around" p={1}>
          <AvatarAndAddress userName={userName} address={address} />
          <Typography variant="h4">&nbsp;{usdReward}</Typography>
        </Box>
      </BgGrid>
      <Grid item xs={12}>
        <BountyDescription description={description} />
      </Grid>
    </Grid>
  );
};

BountyViewWindow.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array,
  userName: PropTypes.string,
  address: PropTypes.string,
  usdReward: PropTypes.string,
  isActive: PropTypes.bool,
  isImproveRequest: PropTypes.bool,
  description: PropTypes.string,
};

BountyViewWindow.defaultProps = {
  title: "High frequency ETH/USD Coinbase data",
  labels: ["trading-data", "high-frequency", "kafka", "c++"],
  address: "0x0000000000000000000000000000000000000000",
  ariaLabel: "user",
  avatar:
    "https://gateway.pinata.cloud/ipfs/QmNpfCosLnzcHuGv7nyBN16rz6UuZfJ4hwTCKVxuGaDAPZ",
  userName: "$NAZ",
  usdReward: "$12.22",
  isActive: true,
  isImproveRequest: false,
  description: `
  # Description
  Suspendisse ac libero et mauris imperdiet consequat. Integer non nisi vitae risus semper commodo. Praesent ultricies posuere eros ut pretium. Ut lobortis eros id nulla fermentum facilisis non quis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam nisi dui, sit amet porta massa facilisis ut. Nam sit amet augue fringilla, lacinia lectus eu, finibus est. Cras eu quam nulla. Nullam a arcu eu urna congue sodales vitae a orci. Sed interdum erat nec molestie pellentesque. Nam efficitur tortor velit, eget euismod est tincidunt eu. Sed a nisi tempor, scelerisque orci sed, rhoncus orci.

  NOTE:

  Aliquam ut dapibus odio. Integer risus risus, consectetur id luctus sed, laoreet ut justo. Morbi lacinia lorem at magna rutrum consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquet libero eget lacus semper, quis luctus turpis blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet varius ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vehicula neque sit amet risus vehicula elementum. Nunc sed aliquam leo.

  Aliquam ut ex ut odio congue finibus ut id turpis. Quisque ornare, enim quis placerat placerat, lorem dolor suscipit libero, at euismod mauris nunc non lorem. Cras varius lacus sit amet dui lobortis sodales. Etiam volutpat urna fringilla, tincidunt metus non, volutpat augue. Aenean ut mattis sem. Mauris ut justo vulputate, facilisis eros vitae, dictum tellus. Donec eleifend dolor nec ante venenatis tristique. Curabitur ut lacus purus.
  `,
};

export default BountyViewWindow;
