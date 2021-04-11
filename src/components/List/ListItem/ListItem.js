import React from 'react';
import CloseIcon from '../../../assets/svg/icon-cross.svg';
import Checkbox from './Checkbox';
import { CloseBtn, CloseBtnIcon, Item, ItemText } from './ListItemElements';

const ListItem = ({ text }) => {
  return (
    <Item>
      <Checkbox />
      <ItemText>{text}</ItemText>
      <CloseBtn>
        <CloseBtnIcon src={CloseIcon} alt="cross-icon" />
      </CloseBtn>
    </Item>
  );
};

export default ListItem;
