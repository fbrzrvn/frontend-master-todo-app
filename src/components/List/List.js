import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { orderTodo } from '../../actions/todoActions';
import { ListWrap, TodoList } from './ListElements';
import ListItem from './ListItem';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const { status } = useSelector(state => state.filters);
  const currentTodos =
    status !== 'all' ? todos.filter(todo => todo.status === status) : todos;

  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const items = [...todos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(orderTodo(items));
  };

  return (
    <ListWrap>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <TodoList
              className="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {currentTodos.map((todo, index) => (
                <ListItem key={todo.id} todo={todo} index={index} />
              ))}
              {provided.placeholder}
            </TodoList>
          )}
        </Droppable>
      </DragDropContext>
    </ListWrap>
  );
};

export default List;
