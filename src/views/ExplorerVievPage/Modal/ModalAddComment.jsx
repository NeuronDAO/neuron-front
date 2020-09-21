import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import TextArea from "../../../components/LockComp/MeTextArea";

export default function ScrollDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const {current: descriptionElement} = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div className={classes.action}>
      <Button onClick={handleClickOpen("body")} variant="outlined">
        Add Comment
      </Button>
      <Typography className={classes.dopText} variant="button" color="textSecondary">
        Sometimes it's easier to ask
      </Typography>
      {/* START MODAL */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        maxWidth="sm"
        disableBackdropClick={true}
      >
        <DialogTitle id="scroll-dialog-title" align="left">
          {" "}
          Add Comments?{" "}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Typography variant="subtitle2" paragraph>
            Ask your question to the customer or other community members
          </Typography>
          {/* Enable TEXT */}
          <TextArea
            id="addDesc"
            full={true}
            value={false}
            label="Comments:"
            place="Enter coment..."
          />
        </DialogContent>

        <DialogActions className={classes.footerModal}>
          <Button onClick={handleClose} color="inherit" variant="text">
            Cancel
          </Button>

          <Button onClick={handleClose} color="inherit" variant="outlined">
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//  LOC CSS
const useStyles = makeStyles((theme) => ({
  footerModal: {
    display: "flex",
    margin: "10px 22px",
  },
  action: {
    display: "inline-flex",
    marginBottom: "10px",
  },
  dopText: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
}));
