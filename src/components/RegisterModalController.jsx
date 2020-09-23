import React, {useState, useCallback} from "react";

// ! OTHER DEPENDENCIES
import RegisterModal from "./pure/RegisterModal";

import "sanitize.css";

const RegisterModalController = () => {
  const [user, setUser] = useState("$NAZ");
  const [email, setEmail] = useState("steve@jobs.com");

  const handleUserChange = useCallback(
    (e) => {
      setUser(e.target.value);
    },
    [setUser]
  );
  const handleEmailChange = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  return (
    <RegisterModal
      user={{value: user, handleChange: handleUserChange}}
      email={{value: email, handleChange: handleEmailChange}}
    />
  );
};

export default RegisterModalController;
