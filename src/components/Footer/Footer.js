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

const Footer = () => {
  const activeItems = 1;
  const areItems = activeItems > 1 ? 'items' : 'item';

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterCountText>
          {activeItems > 0 ? `${activeItems} ${areItems} left` : 'No item left'}
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
