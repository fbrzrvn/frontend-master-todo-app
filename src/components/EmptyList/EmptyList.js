import React from 'react';
import { Text, Wrapper } from './EmplyListElements';

const EmptyList = () => {
  return (
    <Wrapper>
      <Text>👀 Todo list is empty</Text>
      <Text>Add your first todo above ☝️</Text>
    </Wrapper>
  );
};

export default EmptyList;
