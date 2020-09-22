import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import Input from "../../../components/LockComp/MeInput";
import TextArea from "../../../components/LockComp/MeTextArea";

/**
 * Всплывающее окно для создания новой заявки в проекте
 * Вся его суть в том. что оно создает окно
 */
export default function ScrollDialog() {
  // Use Css
  const classes = useStyles();

  // Задаем поведение по умолчиню
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
        Fulfill
      </Button>
      {/* START MODAL */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        maxWidth="sm"
        disableBackdropClick={true}
      >
        <DialogTitle id="modalAddHeader" align="left">
          {" "}
          Enter Submission Details{" "}
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <Typography variant="subtitle2" paragraph>
            Enter and submit the details for your bounty submission, including any links
            to content that may be required for fulfillment as indicated by the bounty
            description. You may format your submission description using Markdown.
          </Typography>

          {/* MODAL INPUT  */}
          <Input
            id="addLink"
            full={true}
            value={false}
            label="Link:"
            place="Enter link..."
            type="text"
          />

          <TextArea
            id="addDesc"
            full={true}
            value={false}
            label="Description:"
            place="Enter desc..."
          />
        </DialogContent>

        <DialogActions className={classes.footerModal}>
          <Button onClick={handleClose} color="inherit" variant="text">
            Close
          </Button>

          <Button onClick={handleClose} color="inherit" variant="outlined">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//  USE CSS
const useStyles = makeStyles((theme) => ({
  footerModal: {
    display: "flex",
    margin: "10px 22px",
  },
  action: {
    display: "inline-flex",
  },
}));
