import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import styled from "styled-components";

const RowBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const BoxCenter = styled(Box)`
  text-align: left;
  padding-left: 8px;
`;

const SmolTypo = styled(Typography)`
  /* BOTH of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

const AvatarAndAddress = ({address, avatar, ariaLabel, userName}) => {
  const preventDefault = (e) => e.preventDefault();

  return (
    <RowBox>
      <Avatar aria-label={ariaLabel} src={avatar}>
        DR
      </Avatar>
      <BoxCenter>
        <Typography>{userName}</Typography>
        <SmolTypo>
          <Link href="#" onClick={preventDefault} color="inherit">
            {address}
          </Link>
        </SmolTypo>
      </BoxCenter>
    </RowBox>
  );
};

AvatarAndAddress.propTypes = {
  address: PropTypes.string,
  ariaLabel: PropTypes.string,
  avatar: PropTypes.string,
  userName: PropTypes.string,
};

AvatarAndAddress.defaultProps = {
  address: "0x0000000000000000000000000000000000000000",
  ariaLabel: "user",
  avatar:
    "https://gateway.pinata.cloud/ipfs/QmNpfCosLnzcHuGv7nyBN16rz6UuZfJ4hwTCKVxuGaDAPZ",
  userName: "$NAZ",
};

export default AvatarAndAddress;
