import styled from 'styled-components';
import { MEDIA } from '../../styles/media';
export const ListWrap = styled.div`
  background: ${({ theme }) => theme.listBackground};
  border-radius: 5px 5px 0 0;
  margin: 2em auto 0;
  transition: all 1s ease;

  ${MEDIA.small} {
    width: 90%;
    margin-top: 1em;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
`;
