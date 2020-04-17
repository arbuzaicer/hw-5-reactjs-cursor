import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SecureSection from '../../components/SecureSection';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Copyright from '../../components/Copyright';

import {
  CustomCheckbox,
  Form,
  LinksSection,
  SubmitBtn,
  Wrapper,
} from '../../components/Styled/StyledComponents';

const SignIn = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const [mail, getMail] = useState("");
  const [password, getPassword] = useState("");
  const [rememberMe, setIsRememberMe] = useState(false);

  const getEmailValue = (value) => getMail(value);
  const getPasswordValue = (value) => getPassword(value);
  const setRememberHandler = (event) => {
    const value =
      event.target.name === "isRemembered"
        ? event.target.checked
        : event.target.value;
    setIsRememberMe(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const resultDataForm = {
      mail,
      password,
      rememberMe,
    };
    const currentUser = contacts.find(
      (user) =>
        user.mail === resultDataForm.mail &&
        user.password === resultDataForm.password
    );
    if (currentUser) {
      alert("User is in DataBase");
      currentUser.rememberMe = resultDataForm.rememberMe;
      const resUser = contacts.filter(
        (user) =>
          user.mail !== resultDataForm.mail &&
          user.password !== resultDataForm.password
      );
      localStorage.setItem(
        "contacts",
        JSON.stringify([...resUser, currentUser])
      );
    } else {
      alert("There is no such user in Data Base. Please register first.");
    }
  };

  return (
    <>
      <Wrapper>
        <SecureSection title="Sign In" />
        <Form>
          <EmailInput getMailValue={getEmailValue} />
          <PasswordInput getPasswordValue={getPasswordValue} />
          <CustomCheckbox className="checkbox-custom">
            <input
              onChange={setRememberHandler}
              name="isRemembered"
              type="checkbox"
            />
            Remember Me
          </CustomCheckbox>
          <SubmitBtn onClick={handleSubmit} type="submit" value="Sign In" />
        </Form>
        <LinksSection>
          <a href="#">Forgot your password?</a>
          <Link to="/sign-up">Don't have an account? Sign Up</Link>
        </LinksSection>
      </Wrapper>
      <Copyright />
    </>
  );
};

export default SignIn;
