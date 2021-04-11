import React from 'react';
import CheckIcon from '../../../../assets/svg/icon-check.svg';
import { CheckboxBtn, CheckboxBtnIcon } from './CheckboxElements';

const Checkbox = ({ completed }) => {
  return (
    <CheckboxBtn aria-label="Mark as complete" completed={completed}>
      {completed ? <CheckboxBtnIcon src={CheckIcon} alt="check-icon" /> : ''}
    </CheckboxBtn>
  );
};

export default Checkbox;
