import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';

const StyledBtn = styled.button.attrs({
  type: 'button'
})`
  width: 11.25rem;
  height: 11.25rem;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 10px rgba(62, 192, 136, 0.8);
  background-color: #50e3a4;
  border-radius: 50%;
  font-size: 6.25rem;
  color: #46be8b;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: .15s background-color ease-in-out;
  &:hover {
    background-color: ${darken(0.05, '#50e3a4')};
  }
`;

const ModalBtn = ({ toggleModal }) => (
  <StyledBtn onClick={() => toggleModal()}>
    +
  </StyledBtn>
);

ModalBtn.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default ModalBtn;