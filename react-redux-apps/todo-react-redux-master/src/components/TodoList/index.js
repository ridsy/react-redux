import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

const TodoList = ({ todos, onTodoClick }) =>
  todos.map(todo => 
    (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
