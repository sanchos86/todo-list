import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';

import Checked from '../../../../../../images/Checked.png';

const StyledToggler = styled.label.attrs({
  title: 'Toggle todo'
})` 
  display: inline-block;
  width: 3.6875rem;
  height: 3.6875rem;
  border-radius: 50%;
  margin-left: 0.75rem;
  border: 0.4375rem solid ${props => props.completed ? '#50e3a4' : '#eef0f5'};
  background: ${props => props.completed ? `url(${Checked})` : 'none'} no-repeat center;
  background-size: 1.8125rem 1.4375rem;
  cursor: pointer;
  transition: .1s border ease-in-out;
  &:hover {
    border: 0.4375rem solid ${props => props.completed ? darken(0.05, '#50e3a4') : darken(0.05, '#eef0f5')};
  }
`;

const StateToggler = ({ id, completed, toggleTodo }) => (
  <StyledToggler completed={completed}>
    <input type="checkbox" checked={completed} style={{display: 'none'}} onChange={() => toggleTodo(id)}/>
  </StyledToggler>
);

StateToggler.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default StateToggler;