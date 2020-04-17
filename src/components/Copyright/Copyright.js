import React from "react";
import { MdCopyright } from "react-icons/all";

import styled from "styled-components";

const CopyrightSection = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #9b9b9b;
  svg {
    transform: translateY(20%);
  }
`;

const Copyright = () => {
  return (
    <CopyrightSection>
      Copyright <MdCopyright /> Your Website 2020.
    </CopyrightSection>
  );
};

export default Copyright;
