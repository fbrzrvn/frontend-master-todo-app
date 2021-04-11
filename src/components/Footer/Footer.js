import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStaus, clearCompletedTodos } from '../../actions/todoActions';
import {
  FooterClearText,
  FooterContainer,
  FooterCountText,
  FooterListItem,
  FooterListWrap,
  FooterTagline,
  FooterWrap,
} from './FooterElements';

const Footer = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.filters);
  const todos = useSelector(state => state.todos);
  const uncompletedTodos = todos.filter(todo => !todo.complete).length;
  const suffix = uncompletedTodos > 1 ? 's' : '';

  const handleClick = e => {
    if (!e.target.id) return;
    dispatch(changeStaus(e.target.id));
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterCountText>
          {uncompletedTodos > 0
            ? `${uncompletedTodos} item${suffix} left`
            : 'No item left'}
        </FooterCountText>
        <FooterClearText onClick={() => dispatch(clearCompletedTodos())}>
          Clear Completed
        </FooterClearText>
      </FooterWrap>
      <FooterListWrap onClick={handleClick}>
        <FooterListItem id="all" status={status}>
          All
        </FooterListItem>
        <FooterListItem id="active" status={status}>
          Active
        </FooterListItem>
        <FooterListItem id="complete" status={status}>
          Completed
        </FooterListItem>
      </FooterListWrap>
      <FooterTagline>Drag and drop to render list</FooterTagline>
    </FooterContainer>
  );
};

export default Footer;
