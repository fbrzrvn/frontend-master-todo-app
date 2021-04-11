import React from 'react';
import CheckIcon from '../../../../assets/svg/icon-check.svg';
import { CheckboxBtn, CheckboxBtnIcon } from './CheckboxElements';

const Checkbox = () => {
  const completed = false;
  return (
    <CheckboxBtn aria-label="Mark as complete">
      {completed ? <CheckboxBtnIcon src={CheckIcon} alt="check-icon" /> : ''}
    </CheckboxBtn>
  );
};

export default Checkbox;
