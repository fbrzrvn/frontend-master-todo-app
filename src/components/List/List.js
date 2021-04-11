import React from 'react';
import { useSelector } from 'react-redux';
import { ListWrap, TodoList } from './ListElements';
import ListItem from './ListItem';

const List = () => {
  const todos = useSelector(state => state.todos);
  const { status } = useSelector(state => state.filters);
  const currentTodos =
    status !== 'all' ? todos.filter(todo => todo.status === status) : todos;

  return (
    <ListWrap>
      <TodoList>
        {currentTodos.length > 0
          ? currentTodos.map(todo => <ListItem key={todo.id} todo={todo} />)
          : ''}
      </TodoList>
    </ListWrap>
  );
};

export default List;
