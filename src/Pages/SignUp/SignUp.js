import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SecureSection from '../../components/SecureSection';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import UserData from '../../components/UserData';
import Copyright from '../../components/Copyright';

import {
  CustomCheckbox,
  CustomSection,
  Form,
  LinksSection,
  SubmitBtn,
  Wrapper,
} from '../../components/Styled/StyledComponents';

const SignUp = () => {
  const [firstName, getFirstName] = useState("");
  const [validFirstName, isValidFirstName] = useState(false);
  const [lastName, getLastName] = useState("");
  const [validLastName, isValidLastName] = useState(false);
  const [mail, getMail] = useState("");
  const [validMail, isValidMail] = useState(false);
  const [password, getPassword] = useState("");
  const [validPassword, isValidPassword] = useState(false);

  const getEmailValue = (value, isValid) => {
    getMail(value);
    isValidMail(isValid);
  };
  const userFirstNameValue = (firstName, isValid) => {
    getFirstName(firstName);
    isValidFirstName(isValid);
  };
  const userLastNameValue = (lastName, isValid) => {
    getLastName(lastName);
    isValidLastName(isValid);
  };
  const getPasswordValue = (value, isValid) => {
    getPassword(value);
    isValidPassword(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validFirstName && validLastName && validMail && validPassword) {
      const resultDataForm = {
        firstName,
        lastName,
        mail,
        password,
      };
      const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
      const searchUser = contacts.find(
        (user) =>
          user.firstName === resultDataForm.firstName &&
          user.lastName === resultDataForm.lastName &&
          user.mail === resultDataForm.mail &&
          user.password === resultDataForm.password
      );
      if (searchUser) {
        alert("User Already exist");
      } else {
        const resData = [...contacts, resultDataForm];
        localStorage.setItem("contacts", JSON.stringify(resData));
      }
    } else {
      alert("Not valid Data");
    }
  };

  return (
    <>
      <Wrapper>
        <SecureSection title="Sign Up" />
        <Form>
          <CustomSection>
            <UserData
              placeholder="First Name*"
              userDataValue={userFirstNameValue}
            />
            <UserData
              placeholder="Last Name*"
              userDataValue={userLastNameValue}
            />
          </CustomSection>
          <EmailInput getMailValue={getEmailValue} />
          <PasswordInput getPasswordValue={getPasswordValue} />
          <CustomCheckbox className="checkbox-custom">
            <input type="checkbox" />I want to receive inspiration, marketing
            promotions and updates via email.
          </CustomCheckbox>
          <SubmitBtn onClick={handleSubmit} type="submit" value="Sign Up" />
        </Form>
        <LinksSection>
          <Link to="/">Already have an account? Sign In</Link>
        </LinksSection>
      </Wrapper>
      <Copyright />
    </>
  );
};

export default SignUp;
