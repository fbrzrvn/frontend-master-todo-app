import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleteTodo } from '../../../actions/todoActions';
import CheckIcon from '../../../assets/svg/icon-check.svg';
import CloseIcon from '../../../assets/svg/icon-cross.svg';
import {
  CheckboxBtn,
  CheckboxBtnIcon,
  CloseBtn,
  CloseBtnIcon,
  Item,
  ItemText,
} from './ListItemElements';

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Item completed={todo.complete}>
      <CheckboxBtn
        aria-label="Mark as complete"
        completed={todo.complete}
        onClick={() => dispatch(toggleCompleteTodo(todo))}
      >
        {todo.complete ? (
          <CheckboxBtnIcon src={CheckIcon} alt="check-icon" />
        ) : (
          ''
        )}
      </CheckboxBtn>
      <ItemText>{todo.text}</ItemText>
      <CloseBtn onClick={() => dispatch(removeTodo(todo.id))}>
        <CloseBtnIcon src={CloseIcon} alt="cross-icon" />
      </CloseBtn>
    </Item>
  );
};

export default ListItem;
