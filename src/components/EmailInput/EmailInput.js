import React, { useEffect, useState } from 'react';

const EmailInput = ({ getMailValue }) => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const [defaultEmail, setDefaultEmail] = useState("");
  const [email, setEmail] = useState("");
  const [validationClasses, setValidationClasses] = useState("input");
  const [validMail, isValidMail] = useState(false);

  const setEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const mailValidator = (e) => {
    if (!e) {
      setValidationClasses("input");
    } else {
      const validator = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
      if (!validator.test(e)) {
        setValidationClasses("no-validate");
        isValidMail(false);
      }
      if (validator.test(e)) {
        setValidationClasses("validate");
        isValidMail(true);
      }
    }
  };

  useEffect(() => {
    if (contacts.length) {
      if (contacts[contacts.length - 1].rememberMe) {
        setDefaultEmail(contacts[contacts.length - 1].mail);
      }
    }
    mailValidator(email);
    getMailValue(email, validMail);
  }, [email, getMailValue, validMail, contacts]);

  return (
    <input
      className={validationClasses}
      onChange={setEmailHandler}
      type="email"
      defaultValue={defaultEmail}
      placeholder="Email Address*"
    />
  );
};

export default EmailInput;
