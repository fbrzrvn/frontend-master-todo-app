import styled from 'styled-components';
import { MEDIA } from '../../../../styles/media';
import { COLOR } from '../../../../styles/variables';

export const CheckboxBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  margin-right: 12px;
  background: none;
  border: 1px solid ${({ theme }) => theme.checkBorder};
  border-radius: 50px;
  cursor: pointer;
  transition: all 1s ease;
  ${({ completed }) =>
    completed &&
    `
    background: ${COLOR.checkBackground};
    border: none;
    `}

  &:hover {
    ${({ completed }) =>
      !completed &&
      `
      border: 1px solid transparent;
      background: ${COLOR.checkBackground} border-box;
      -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      `}
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${MEDIA.small} {
    height: 20px;
    width: 20px;
    margin-right: 24px;
  }
`;

export const CheckboxBtnIcon = styled.img`
  height: 9px;
  width: 11px;

  ${MEDIA.small} {
    height: 7px;
    width: 9px;
  }
`;
