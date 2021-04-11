import styled from 'styled-components';
import { MEDIA } from '../../../styles/media';

export const Item = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.listBackground};
  border-bottom: 1px solid ${({ theme }) => theme.checkBorder};
  display: flex;
  font-size: 18px;
  padding: 1em 1.5em;
  ${({ theme, completed }) =>
    completed
      ? `color: ${theme.completedItems}; text-decoration: line-through;`
      : `color: ${theme.listItems};`}
  transition: all 1s ease;

  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  ${MEDIA.small} {
    font-size: 16px;
    padding: 1em 0.6em;
  } ;
`;

export const ItemText = styled.div`
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;

  ${MEDIA.big} {
    visibility: hidden;
  }

  ${Item}:hover & {
    ${MEDIA.big} {
      visibility: visible;
    }
  }
`;

export const CloseBtnIcon = styled.img`
  height: 20px;
  width: 20px;

  ${MEDIA.small} {
    height: 16px;
    width: 16px;
  }
`;
