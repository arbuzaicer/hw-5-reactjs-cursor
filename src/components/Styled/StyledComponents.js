import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SecureSectionWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SecureSectionIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2em;
    color: black;
  }
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

export const PasLabel = styled.div`
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

export const SupportSection = styled.section`
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

export const CopyrightSection = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #9b9b9b;
  svg {
    transform: translateY(20%);
  }
`;
