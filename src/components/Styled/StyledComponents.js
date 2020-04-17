import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.input`
  height: 40px;
  width: -webkit-fill-available;
  text-transform: uppercase;
  background: #90caf9;
  color: #000000;
  font-weight: 600;
  font-size: 1em;
  transition: 0.5s;
  &:hover {
    background: #5570be;
  }
`;
export const CustomSection = styled.section`
  display: flex;
  width: 370px; 
  justify-content: space-between;
`;

export const LinksSection = styled.section`
  width: 350px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #90caf9;
    font-size: 0.8em;
  }
`;

export const CustomCheckbox = styled.label`
  display: flex;
  padding: 10px 20px 10px 0;
  width: 350px;
  align-items: center;
  justify-content: flex-start;
  input {
    width: 25px;
  margin-right: 20px;
  line-height: 80px;
  }
`;
