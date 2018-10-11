import React from 'react';
import styled from 'styled-components';

import { getDayName, getMonthShortName } from '../../../../utils';

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Gotham Rounded', sans-serif;
  color: #616473;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
`;

const DayNumber = styled.div`
  font-size: 4.75rem;
  margin-right: 1.25rem;
`;

const Year = styled.div`
  font-family: 'Gotham Rounded Book', sans-serif;
`;

const Month = styled.div`
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`;

const DayName = styled.div`
  text-transform: uppercase;
`;

const Heading = () => {
  const date = new Date();
  return (
    <StyledHeading>
      <LeftPart>
        <DayNumber>{date.getDate()}</DayNumber>
        <div>
          <Month>{getMonthShortName(date)}</Month>
          <Year>{date.getFullYear()}</Year>
        </div>
      </LeftPart>
      <DayName>{getDayName(date)}</DayName>
    </StyledHeading>
  );
};

export default Heading;