import React from 'react';
import { useSelector } from 'react-redux';
import { ListWrap, TodoList } from './ListElements';
import ListItem from './ListItem';

const List = () => {
  const todos = useSelector(state => state.todoReducer);

  return (
    <ListWrap>
      <TodoList>
        {todos.length > 0
          ? todos.map(todo => <ListItem key={todo.id} todo={todo} />)
          : ''}
      </TodoList>
    </ListWrap>
  );
};

export default List;
