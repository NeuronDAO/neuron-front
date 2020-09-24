import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

// TODO: instead of this have makeStyles and use consistent spacing from the theme!
// const BountyDescriptionPaper = styled(Paper)`
//   padding: 16px;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  bountyDecriptionPaper: {
    padding: theme.spacing(2),
  },
  boxWithButtons: {
    "& > *": {
      margin: theme.spacing(1),
    },
    flexDirection: "column",
    display: "flex",
  },
}));

const BountyDescription = ({description}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper elevation={3} className={classes.bountyDecriptionPaper}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {/* TODO: font is inconsistent */}
            <ReactMarkdown source={description} />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" flexBasis={1}>
              <Box className={classes.boxWithButtons}>
                <Button variant="contained" color="primary">
                  Fulfill
                </Button>
                <Button variant="contained" color="primary">
                  Contribute
                </Button>
              </Box>
              <Divider orientation="horizontal" flexItem />
              <Typography>Deadline: 19/09/2020</Typography>
              <Typography>Payout: $12.22</Typography>
              <Typography>Collectors&apos; equity payout: 10%</Typography>
              <Typography>Data requester equity payout: 10%</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

BountyDescription.propTypes = {
  description: PropTypes.string,
};

BountyDescription.defaultProps = {
  description: `
    # Description
    Suspendisse ac libero et mauris imperdiet consequat. Integer non nisi vitae risus semper commodo. Praesent ultricies posuere eros ut pretium. Ut lobortis eros id nulla fermentum facilisis non quis purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque aliquam nisi dui, sit amet porta massa facilisis ut. Nam sit amet augue fringilla, lacinia lectus eu, finibus est. Cras eu quam nulla. Nullam a arcu eu urna congue sodales vitae a orci. Sed interdum erat nec molestie pellentesque. Nam efficitur tortor velit, eget euismod est tincidunt eu. Sed a nisi tempor, scelerisque orci sed, rhoncus orci.

    NOTE:

    Aliquam ut dapibus odio. Integer risus risus, consectetur id luctus sed, laoreet ut justo. Morbi lacinia lorem at magna rutrum consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquet libero eget lacus semper, quis luctus turpis blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet varius ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vehicula neque sit amet risus vehicula elementum. Nunc sed aliquam leo.

    Aliquam ut ex ut odio congue finibus ut id turpis. Quisque ornare, enim quis placerat placerat, lorem dolor suscipit libero, at euismod mauris nunc non lorem. Cras varius lacus sit amet dui lobortis sodales. Etiam volutpat urna fringilla, tincidunt metus non, volutpat augue. Aenean ut mattis sem. Mauris ut justo vulputate, facilisis eros vitae, dictum tellus. Donec eleifend dolor nec ante venenatis tristique. Curabitur ut lacus purus.
    `,
};

export default BountyDescription;
