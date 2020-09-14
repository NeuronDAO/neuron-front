import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const RegisterModal = ({ user, email }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Container>
      <Modal open={isOpen} onClose={handleClose}>
        <form noValidate autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            width="400px"
            height="600px"
            className={classes.root}
            p={3}
          >
            <Box>
              <Typography>Register</Typography>
            </Box>
            <TextField
              required
              id="standard-required"
              label="username"
              value={user.value}
              onChange={user.handleChange}
            />
            <TextField
              required
              id="standard-required"
              label="e-mail"
              value={email.value}
              onChange={email.handleChange}
            />
            <Button variant="outlined">Register</Button>
          </Box>
        </form>
      </Modal>
    </Container>
  );
};

RegisterModal.propTypes = {
  email: PropTypes.object, // consisting of value and handleChange function
  user: PropTypes.object,
};

RegisterModal.defaultProps = {
  email: {
    value: "naz@baz.com",
    handleChange: () => {}, // vanilla usecase: setValue(value)
  },
  user: {
    value: "$NAZ",
    handleChange: () => {},
  },
};

export default RegisterModal;
