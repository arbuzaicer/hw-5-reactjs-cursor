import React, { useEffect, useState } from 'react';
import { FaLowVision } from 'react-icons/all';

import { PasLabel, SupportSection } from '../Styled/StyledComponents';

const PasswordInput = ({ getPasswordValue }) => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const [defaultPassword, setDefaultPassword] = useState("") ;
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
      <SupportSection>
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
      if (!validator.test(pass)) {
        setValidationClasses("no-validate");
        isValidPassword(false);
      }
      if (validator.test(pass)) {
        setValidationClasses("validate");
        isValidPassword(true);
      }
    }
  };
  useEffect(() => {
    if(contacts.length) {
      if(contacts[contacts.length-1].rememberMe) {
        setDefaultPassword(contacts[contacts.length-1].password)
      }
    }
    passwordValidator(password);
    getPasswordValue(password, validPassword);
  }, [password, getPasswordValue, validPassword, contacts]);

  return (
    <PasLabel className="password-label">
      <input
        className={validationClasses}
        onChange={setPasswordHandler}
        type={passwordType}
        defaultValue={defaultPassword}
        placeholder="Password*"
      />
      {validationClasses === "no-validate" && supportInfo()}
      <FaLowVision onClick={passwordVisibility} />
    </PasLabel>
  );
};

export default PasswordInput;
