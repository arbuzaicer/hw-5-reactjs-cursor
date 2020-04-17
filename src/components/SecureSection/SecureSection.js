import React from 'react';
import { MdLockOutline } from 'react-icons/all';

import {
  SecureSectionIcon,
  SecureSectionWrapper,
} from '../Styled/StyledComponents';

const SecureSection = ({ title }) => {
  return (
    <SecureSectionWrapper>
      <SecureSectionIcon>
        <MdLockOutline />
      </SecureSectionIcon>
      <h2>{title}</h2>
    </SecureSectionWrapper>
  );
};

export default SecureSection;
