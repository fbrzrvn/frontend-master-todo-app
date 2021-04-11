import React from 'react';
import {
  FooterClearText,
  FooterContainer,
  FooterCountText,
  FooterListItem,
  FooterListWrap,
  FooterTagline,
  FooterWrap,
} from './FooterElements';
import { useSelector } from 'react-redux';

const Footer = () => {
  const todos = useSelector(state => state.todoReducer);
  const activeItems = todos.filter(todo => todo.status === 'active');
  const areItems = activeItems.length > 1 ? 'items' : 'item';

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterCountText>
          {activeItems.length > 0
            ? `${activeItems.length} ${areItems} left`
            : 'No item left'}
        </FooterCountText>
        <FooterClearText>Clear Completed</FooterClearText>
      </FooterWrap>
      <FooterListWrap>
        <FooterListItem>All</FooterListItem>
        <FooterListItem>Active</FooterListItem>
        <FooterListItem>Completed</FooterListItem>
      </FooterListWrap>
      <FooterTagline>Drag and drop to render list</FooterTagline>
    </FooterContainer>
  );
};

export default Footer;
