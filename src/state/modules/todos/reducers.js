import types from './types';
import uuid from 'uuid/v1';

const todos = (state = [], action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false
        }
      ];
    case types.TODO_DELETE:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    case types.TODO_TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case types.TODOS_PRELOAD:
      return action.todos;
    default:
      return state;
  }
};

export default todos;
