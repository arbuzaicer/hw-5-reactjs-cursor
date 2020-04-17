import React from 'react';
import { MdCopyright } from 'react-icons/all';

import { CopyrightSection } from '../Styled/StyledComponents';

const Copyright = () => {
  return (
    <CopyrightSection>
      Copyright <MdCopyright /> Your Website 2020.
    </CopyrightSection>
  );
};

export default Copyright;
