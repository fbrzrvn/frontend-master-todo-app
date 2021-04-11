import React from 'react';
import { FormBtn, FormInput, FormWrap } from './FormElements';

const Form = () => {
  return (
    <form>
      <FormWrap>
        <FormBtn type="submit" aria-label="Create todo" />
        <FormInput
          type="text"
          placeholder="Create a new todo..."
          aria-label="Enter todo item"
        />
      </FormWrap>
    </form>
  );
};

export default Form;
