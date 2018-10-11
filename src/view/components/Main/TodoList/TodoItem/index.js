import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StateToggler from './StateToggler';
import DeleteIcon from './DeleteIcon';

const Todo = styled.div`
  display: flex;
  align-items: center;
  margin: 2.09375rem 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 2.0625rem;
  flex-grow: 1;
  word-break: break-all;
  color: ${props => props.completed ? '#bdc0ca' : '#3e434f'};
`;

const Controls = styled.div`
  height: 3.6875rem;
  display: flex;
  align-items: center;
`;

const TodoItem = ({ todo, toggleTodo, deleteTodo  }) => (
  <Todo>
    <Text completed={todo.completed}>{todo.text}</Text>
    <Controls>
      <DeleteIcon id={todo.id} deleteTodo={deleteTodo} />
      <StateToggler id={todo.id} completed={todo.completed} toggleTodo={toggleTodo} />
    </Controls>
  </Todo>
);

TodoItem.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};

export default TodoItem;