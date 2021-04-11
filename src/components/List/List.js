import React from 'react';
import { ListWrap, TodoList } from './ListElements';
import ListItem from './ListItem';
const List = () => {
  return (
    <ListWrap>
      <TodoList>
        <ListItem text="some text" />
        <ListItem text="some text" />
        <ListItem text="some text" />
        <ListItem text="some text" />
      </TodoList>
    </ListWrap>
  );
};

export default List;
