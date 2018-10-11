import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from './Heading';
import TodoList from './TodoList';
import ModalBtn from './ModalBtn';

const StyledMain = styled.main`
  max-width: 750px;
  margin: 0 auto;
  padding: 7.5rem 6.25rem;
  position: relative;
  background-color: #fff;
  box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
  
  @media (max-width: 768px) {
    padding: 4rem 4rem 7.5rem;
  }
  
  @media (max-width: 500px) {
    padding: 2rem 2rem 7.5rem;
  }
`;

const Main = ({ toggleModal }) => (
  <div style={{padding: '0 2rem'}}>
    <StyledMain>
      <Heading />
      <TodoList />
      <ModalBtn toggleModal={toggleModal} />
    </StyledMain>
  </div>
);

Main.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Main;
