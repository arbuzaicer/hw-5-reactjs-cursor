import React, { useEffect, useState } from "react";
import { FaLowVision } from "react-icons/all";

import styled from "styled-components";

const PasLabel = styled.div`
  position: relative;
  svg {
    position: absolute;
    transform: translate(-200%, 100%);
    transition: 0.5s;
    &:hover {
      transform: translate(-200%, 100%) scale(1.1);
      color: #4d4d4d;
    }
  }
`;

const SupportSection = styled.section`
  position: absolute;
  right: -65%;
  top: -30%;
  padding: 10px;
  background: rgb(75, 75, 75);
  z-index: 999;
  border-radius: 5px;
  &::before {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    transform: translate(-50%, 30%) rotate(45deg);
    background: rgb(75, 75, 75);
    z-index: -1;
  }
`;

const PasswordInput = ({ getPasswordValue }) => {
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [validationClasses, setValidationClasses] = useState("input");
  const [validPassword, isValidPassword] = useState(false);

  const setPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const passwordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const supportInfo = () => {
    return (
      <SupportSection className="support-info">
        <ul>
          Пароль должен включать:
          <li>2 большие буквы;</li>
          <li>3 маленькие буквы;</li>
          <li>2 цифры;</li>
          <li> 1 разделительный знак</li>
        </ul>
      </SupportSection>
    );
  };

  const passwordValidator = (pass) => {
    if (!pass) {
      setValidationClasses("input");
    } else {
      const validator = /^(?=.*[A-Z].*[A-Z])(?=.*[!#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
      if(!validator.test(pass)) {
        setValidationClasses("no-validate");
        isValidPassword(false);
      }
      if(validator.test(pass)) {
        setValidationClasses("validate");
        isValidPassword(true);
      }
    }
  };

  useEffect(() => {
    passwordValidator(password);
    getPasswordValue(password, validPassword);
  }, [password, getPasswordValue, validPassword]);

  return (
    <PasLabel className="password-label">
      <input
        className={validationClasses}
        onChange={setPasswordHandler}
        type={passwordType}
        placeholder="Password*"
      />
      {validationClasses === "no-validate" && supportInfo()}
      <FaLowVision onClick={passwordVisibility} />
    </PasLabel>
  );
};

export default PasswordInput;
