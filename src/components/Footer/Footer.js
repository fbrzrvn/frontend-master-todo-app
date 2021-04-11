import React from 'react';
import { useSelector } from 'react-redux';
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
  const todos = useSelector(state => state.todoReducer);
  const totalItems = todos.map(todo => todo).length;
  const areItems = totalItems > 1 ? 'items' : 'item';

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterCountText>
          {totalItems > 0 ? `${totalItems} ${areItems} left` : 'No item left'}
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
