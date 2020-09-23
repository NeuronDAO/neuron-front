import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import "sanitize.css";

const useStyles = makeStyles((theme) => ({
  footerModal: {
    textAlign: "center",
    display: "block",
  },
  lastBtn: {
    fontSize: theme.typography.pxToRem(11),
    marginBottom: "25px",
  },
}));

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
    <div>
      <Button onClick={handleClickOpen("body")} variant="outlined">
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="Сюда дублируем заголовок"
        aria-describedby="Сюда дублируем описания диалогового окна"
        maxWidth="xs"
      >
        <DialogTitle id="scroll-dialog-title" align="center">
          Окно авторизации
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"} align="center">
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography align="center" paragraph>
              Если у пользователя нет Мемамаски - то говорим ему об этом. Текста будет
              больше, по этому вслпывающее окно будет смотрется гораздо лучшее + иконка
              сделает своё дело{" "}
            </Typography>
          </DialogContentText>

          <Button onClick={handleClose} color="inherit" variant="outlined">
            Скачать метомаск
          </Button>
        </DialogContent>
        <DialogActions className={classes.footerModal}>
          <Button onClick={handleClose} color="inherit" className={classes.lastBtn}>
            Может быть потом
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
