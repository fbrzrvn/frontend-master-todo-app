import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoActions';
import { FormBtn, FormInput, FormWrap } from './FormElements';

const Form = () => {
  const [todo, setTodo] = useState('');
  const dispacth = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (todo.length === 0) return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      complete: false,
      status: 'active',
    };
    dispacth(addTodo(newTodo));

    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrap>
        <FormBtn type="submit" aria-label="Create todo" />
        <FormInput
          type="text"
          placeholder="Create a new todo..."
          aria-label="Enter todo item"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </FormWrap>
    </form>
  );
};

export default Form;
