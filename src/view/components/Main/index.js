import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import TodoList from './TodoList';

const StyledMain = styled.main`
  max-width: 750px;
  margin: 0 auto;
  padding: 120px 100px;
  background-color: #fff;
  box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
`;

const Main = ({ toggleModal }) => (
  <StyledMain>
    <Heading />
    <TodoList toggleModal={toggleModal} />
  </StyledMain>
);

export default Main;
