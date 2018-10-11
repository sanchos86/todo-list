import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDeleteIcon = styled.div.attrs({
  title: 'Delete todo'
})`
  line-height: 2.8125rem;
  text-align: center;
  width: 3.6875rem;
  height: 3.6875rem;
  margin-left: 0.75rem;
  border: 0.4375rem solid #ff0000;
  border-radius: 50%;
  color: #ff0000;
  font-size: 3rem;
  cursor: pointer;
`;

const DeleteIcon = ({ id, deleteTodo }) => (
  <StyledDeleteIcon onClick={() => deleteTodo(id)}>&times;</StyledDeleteIcon>
);

DeleteIcon.propTypes = {
  id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default DeleteIcon;