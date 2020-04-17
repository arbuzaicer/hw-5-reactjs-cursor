import React from "react";
import { MdLockOutline } from "react-icons/all";

import styled from "styled-components";

const SecureSectionWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SecureSectionIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecureSection = ({ title }) => {
  return (
    <SecureSectionWrapper>
      <SecureSectionIcon className="secure-section">
        <MdLockOutline />
      </SecureSectionIcon>
      <h2>{title}</h2>
    </SecureSectionWrapper>
  );
};

export default SecureSection;
