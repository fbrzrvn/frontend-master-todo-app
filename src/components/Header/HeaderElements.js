import styled from 'styled-components';
import { MEDIA } from '../../styles/media';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3em 0;
  ${MEDIA.small} {
    padding: 1.6em;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: 2.5em;
  letter-spacing: 0.9em;
  ${MEDIA.small} {
    font-size: 1.6em;
    letter-spacing: 0.8em;
  }
`;

export const ToggleBtnWrap = styled.div`
  cursor: pointer;
`;

export const ToggleBtn = styled.img`
  height: 32px;
  width: 32px;
  ${MEDIA.small} {
    height: 20px;
    width: 20px;
  }
`;
