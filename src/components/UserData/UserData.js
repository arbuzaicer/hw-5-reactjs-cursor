import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const UserDataWrapper = styled.input`
  width: 150px;
`;

const UserData = ({ placeholder, userDataValue }) => {
  const [userData, setUserData] = useState("");
  const [validationClasses, setValidationClasses] = useState("input");
  const [userValidator, setUserValidator] = useState(false);

  const setUserDataHandler = (event) => {
    setUserData(event.target.value);
  };

  const userDataValidation = (value) => {
    if (!value) {
      setValidationClasses("input");
    } else {
      const validator = /^[a-zA-Z0-9]{3,15}$/;
      if (!validator.test(value)) {
        setValidationClasses("no-validate");
        setUserValidator(false);
      }
      if (validator.test(value)) {
        setValidationClasses("validate");
        setUserValidator(true);
      }
    }
  };
  useEffect(() => {
    userDataValidation(userData);
    userDataValue(userData, userValidator);
  }, [userData, userDataValue, userValidator]);

  return (
    <UserDataWrapper
      type="text"
      onChange={setUserDataHandler}
      className={validationClasses}
      placeholder={placeholder}
    />
  );
};

export default UserData;
