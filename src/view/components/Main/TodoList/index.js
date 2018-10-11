import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { todosActions } from '../../../../state/modules/todos';
import TodoItem from './TodoItem';

const NoTodos = styled.div`
  text-align: center; 
  font-size: 1.5rem;
  margin: 1.5rem 0; 
`;

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  !!todos.length ? (
    <div>
      {
        todos.map((todo) =>
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        )
      }
    </div>
  ) : (
    <NoTodos>Add some todos</NoTodos>
  )
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {...todosActions})(TodoList);